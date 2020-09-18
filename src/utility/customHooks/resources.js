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
  useEffect(() => {
    let unmounted = false
    const source = axios.CancelToken.source()
    dispatch(fetchStart())
    axios.get(url, { CancelToken: source.token })
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

  const pagination = async (pageNumber, config) => {
    dispatch(fetchStart())
    await axios.get(`${url}/?page=${pageNumber}`, pageNumber, config)
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
  const postData = async (values, url, config) => {
    dispatch(fetchStart())
    await axios.post(url, values, config)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const clean = () => dispatch(cleanState())

  return { data, postData, clean }
}
