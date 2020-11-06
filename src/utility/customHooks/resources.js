import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
  initialState,
  resourcesReducer,
  fetchStart,
  fetchSuccess,
  fetchError,
  cleanState,
  removeItem,
  fetchSearch,
  updateStatus,
} from '../../ducks/resources'

export function useFetchResources(url) {
  const [items, dispatch] = useReducer(resourcesReducer, initialState)
  const { access_token } = JSON.parse(localStorage.getItem('user'))
  const header = { headers: { Authorization: `Bearer ${access_token}` } }

  useEffect(() => {
    let unmounted = false
    const source = axios.CancelToken.source()
    dispatch(fetchStart())
    axios.get(url, { CancelToken: source.token, headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => {
        if (!unmounted) dispatch(fetchSuccess(response.data))
      })
      .catch((error) => {
        if (!axios.isCancel()) dispatch(fetchError(error))
      })

    return () => {
      unmounted = true
      source.cancel()
    }
  }, [url])

  const remove = async (data) => {
    dispatch(fetchStart())
    await axios.delete(`${url.replace('?', '/')}${data.id}`, header)
      .then((response) => console.log('response', response))
      .catch((error) => dispatch(fetchError(error)))
    await axios.get(`${url}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const changeStatus = async (data, field) => {
    await axios.put(`${url.replace('?', '/')}${data.id}`, data, header)
      .then(dispatch(updateStatus(data, field)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const pagination = async (pageNumber) => {
    dispatch(fetchStart())
    await axios.get(`${url}&page=${pageNumber}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const search = async (param, data) => {
    dispatch(fetchStart())
    await axios.get(`${url}&${param}=${data}`, header)
      .then((response) => dispatch(fetchSearch(response.data, data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  return {
    items,
    remove,
    changeStatus,
    pagination,
    search,
  }
}

export function usePostResources() {
  const [data, dispatch] = useReducer(resourcesReducer, initialState)
  const { access_token } = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : 'null'
  const postData = async (values, url, config) => {
    dispatch(fetchStart())
    await axios.post(url, values, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const update = async (data, url) => {
    dispatch(fetchStart())
    await axios.put(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const changeStatus = async (data, url) => {
    dispatch(fetchStart())
    await axios.put(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then(dispatch(updateStatus(data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const patchData = async (data, url) => {
    dispatch(fetchStart())
    await axios.patch(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const clean = () => dispatch(cleanState())

  return { data, postData, clean, update, patchData, changeStatus }
}
