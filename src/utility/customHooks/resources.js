import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
  initialState,
  resourcesReducer,
  fetchStart,
  fetchSuccess,
  fetchError,
  cleanState,
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

  const remove = async (data, config) => {
    dispatch(fetchStart())
    await axios.post(`${url}/remove`, data, config)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const changeStatus = async (data, config) => {
    dispatch(fetchStart())
    await axios.post(`${url}/status`, data, config)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const pagination = async (pageNumber) => {
    dispatch(fetchStart())
    await axios.get(`${url}/?page=${pageNumber}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  return {
    items,
    remove,
    changeStatus,
    pagination,
  }
}

export function usePostResources() {
  const [data, dispatch] = useReducer(resourcesReducer, initialState)
  const { access_token } = JSON.parse(localStorage.getItem('user'))
  const postData = async (values, url, config) => {
    dispatch(fetchStart())
    await axios.post(url, values, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const clean = () => dispatch(cleanState())

  return { data, postData, clean }
}
