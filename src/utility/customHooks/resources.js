import { useEffect, useReducer } from 'react'
import axios from 'axios'
import {
  initialState,
  resourcesReducer,
  fetchStart,
  fetchSuccess,
  fetchError,
  cleanState,
  fetchSearch,
  fetchOrder,
  updateStatus,
  fetchSignature,
} from '../../ducks/resources'
import { urlApi, baseApiUrl } from '../helpers/consts'

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
      .catch((error) => dispatch(fetchError(error)))
    await axios.get(`${url}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const removeControl = async (data) => {
    dispatch(fetchStart())
    await axios.delete(`${urlApi}${baseApiUrl}control_measures/${data.id}`, header)
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

  const pagination = async (pageNumber, search) => {
    const params = search != null ? `${search.data}&page=${pageNumber}` : `&page=${pageNumber}`
    dispatch(fetchStart())
    await axios.get(`${url}${params}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const search = async (param, values) => {
    dispatch(fetchStart())
    const params = `${param}=${values.value}`
    await axios.get(`${url}${params}`, header)
      .then((response) => dispatch(fetchSearch(response.data, { type: param, data: params, value: values.value })))
      .catch((error) => dispatch(fetchError(error)))
  }

  const queryParams = async (params) => {
    dispatch(fetchStart())
    await axios.get(`${url}${params}`, header)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const indicatorsParams = async (data) => {
    dispatch(fetchStart())
    const newUrl = (data.area == null || !data.area) ? `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}` : `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}&area_id=${data.area}`
    await axios.get(`${newUrl}`, header)
      .then((response) => dispatch(fetchSearch(response.data, data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const risksParams = async (data) => {
    dispatch(fetchStart())
    const newUrl = (data.area == null || !data.area) ? `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}` : `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}&area_id=${data.area}`
    await axios.get(`${newUrl}`, header)
      .then((response) => dispatch(fetchSearch(response.data, data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const orderBy = async (orderby, ordering) => {
    const orderParams = `orderBy=${orderby}&order=${ordering}`
    await axios.get(`${url}${orderParams}`, header)
      .then((response) => dispatch(fetchOrder(response.data, !ordering, { type: 'order', data: orderParams, order: ordering })))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateSignature = async (data, url, id, items) => {
    dispatch(fetchStart())
    await axios.post(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then(dispatch(fetchSuccess(items)))
      .then(dispatch(fetchSignature(data, { id, signature: data, status: 'attended' }, items)))
      .catch((error) => dispatch(fetchError(error)))
  }

  return {
    items,
    remove,
    changeStatus,
    pagination,
    search,
    queryParams,
    indicatorsParams,
    risksParams,
    removeControl,
    orderBy,
    updateSignature,
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
  const postExport = async (values, url, config) => {
    dispatch(fetchStart())
    await axios.post(url, values, { headers: { Authorization: `Bearer ${access_token}` }, responseType: 'arraybuffer' })
      .then((response) => {
        const type = response.headers['content-type']
        const date = new Date()
        const fileUrl = window.URL.createObjectURL(new Blob([response.data]), { type })
        const link = document.createElement('a')
        link.href = fileUrl
        link.setAttribute('download', `actions-${date}.xlsx`)
        dispatch(fetchSuccess(link))
      })
      .catch((error) => dispatch(fetchError(error)))
  }

  const update = async (data, url) => {
    dispatch(fetchStart())
    await axios.put(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateFiles = async (data, url) => {
    dispatch(fetchStart())
    await axios.post(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateSignature = async (data, url, id, items) => {
    dispatch(fetchStart())
    await axios.post(url, data, { headers: { Authorization: `Bearer ${access_token}` } })
      .then(dispatch(fetchSuccess(items)))
      .then(dispatch(fetchSignature(data, { id, signature: data, status: 'attended' }, items)))
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

  return {
    data,
    postData,
    clean,
    update,
    patchData,
    changeStatus,
    updateFiles,
    postExport,
    updateSignature,
  }
}
