import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
    initialState,
    resourcesReducer,
    fetchStart,
    fetchSuccess,
    fetchError
} from '../../ducks/resources'

export function useFetchResources(url) {
    const [data, dispatch] = useReducer(resourcesReducer, initialState)
    useEffect(() => {
        dispatch(fetchStart())

        axios.get(url)
        .then(response => dispatch(fetchSuccess(response.data)))
        .catch(error => dispatch(fetchError(error)))
    }, [url])

    return data
}