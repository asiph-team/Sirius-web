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
    dispatch(fetchStart())

    axios.get(url)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
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
