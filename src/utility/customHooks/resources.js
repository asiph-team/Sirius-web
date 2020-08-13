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
  const [data, dispatch] = useReducer(resourcesReducer, initialState)
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

  return data
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
