import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
    initialState,
    enterprisesReducer,
    fetchStartEnterprises,
    fetchSuccessEnterprises,
    fetchErrorEnterprises
} from '../../ducks/enterprises'

export function useFetchEnterprises() {
    const [data, dispatch] = useReducer(enterprisesReducer, initialState)
    useEffect(() => {
        dispatch(fetchStartEnterprises())

        axios.get('/api/v1/enterprises')
        .then(response => dispatch(fetchSuccessEnterprises(response.data)))
        .catch(error => dispatch(fetchErrorEnterprises(error)))
    }, [])

    return data
}