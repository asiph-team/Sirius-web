import { useEffect, useReducer } from 'react'
import axios from 'axios'
import api from '../../service/api'
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
  cleanTemp,
} from '../../ducks/resources'

export function useFetchResources(url) {
  const [items, dispatch] = useReducer(resourcesReducer, initialState)
  useEffect(() => {
    let unmounted = false
    const source = axios.CancelToken.source()
    dispatch(fetchStart())
    api.get(url, { CancelToken: source.token })
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
    await api.delete(`${url.replace('?', '/')}${data.id}`)
      .catch((error) => dispatch(fetchError(error)))
    await api.get(`${url}`)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const removeControl = async (data) => {
    dispatch(fetchStart())
    await api.delete(`control_measures/${data.id}`)
      .catch((error) => dispatch(fetchError(error)))
    await api.get(`${url}`)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const changeStatus = async (data, field) => {
    await api.put(`${url.replace('?', '/')}${data.id}`, data)
      .then(dispatch(updateStatus(data, field)))
      .catch((error) => dispatch(fetchError(error)))
  }
  const changeStatusAssisted = async (data, field) => {
    const putUrl = 'programs/courses/assistance/'
    await api.put(`${putUrl}${data.id}/assisted`, data)
      .then(dispatch(updateStatus(data, field)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const pagination = async (pageNumber, search) => {
    const params = search != null ? `${search.data}&page=${pageNumber}` : `&page=${pageNumber}`
    dispatch(fetchStart())
    await api.get(url + params)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const search = async (param, values) => {
    dispatch(fetchStart())
    const params = `${param}=${values.value}`
    await api.get(url + params)
      .then((response) => dispatch(fetchSearch(response.data, { type: param, data: params, value: values.value })))
      .catch((error) => dispatch(fetchError(error)))
  }

  const queryParams = async (params) => {
    dispatch(fetchStart())
    await api.get(url + params)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const indicatorsParams = async (data) => {
    dispatch(fetchStart())
    const newUrl = (data.area == null || !data.area) ? `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}` : `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}&area_id=${data.area}`
    await api.get(newUrl)
      .then((response) => dispatch(fetchSearch(response.data, data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const risksParams = async (data) => {
    dispatch(fetchStart())
    const newUrl = (data.area == null || !data.area) ? `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}` : `${url}date_start=${data.dateStart}&date_end=${data.dateEnd}&area_id=${data.area}`
    await api.get(newUrl)
      .then((response) => dispatch(fetchSearch(response.data, data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const orderBy = async (orderby, ordering) => {
    const orderParams = `orderBy=${orderby}&order=${ordering}`
    await api.get(url + orderParams)
      .then((response) => dispatch(fetchOrder(response.data, !ordering, { type: 'order', data: orderParams, order: ordering })))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateSignature = async (data, url, id, items) => {
    dispatch(fetchStart())
    await api.post(url, data)
      .then(dispatch(fetchSuccess(items)))
      .then(dispatch(fetchSignature(data, { id, signature: data, status: 'attended' }, items)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const cleanTempState = () => dispatch(cleanTemp())

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
    cleanTempState,
    changeStatusAssisted,
  }
}

export function usePostResources() {
  const [data, dispatch] = useReducer(resourcesReducer, initialState)
  const postData = async (values, url) => {
    dispatch(fetchStart())
    await api.post(url, values)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }
  const postExport = async (values, url) => {
    dispatch(fetchStart())
    await api.post(url, values, { responseType: 'arraybuffer' })
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
    await api.put(url, data)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateFiles = async (data, url) => {
    dispatch(fetchStart())
    await api.post(url, data)
      .then((response) => dispatch(fetchSuccess(response.data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const updateSignature = async (data, url, id, items) => {
    dispatch(fetchStart())
    await api.post(url, data)
      .then(dispatch(fetchSuccess(items)))
      .then(dispatch(fetchSignature(data, { id, signature: data, status: 'attended' }, items)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const changeStatus = async (data, url) => {
    dispatch(fetchStart())
    await api.put(url, data)
      .then(dispatch(updateStatus(data)))
      .catch((error) => dispatch(fetchError(error)))
  }

  const patchData = async (data, url) => {
    dispatch(fetchStart())
    await api.patch(url, data)
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
