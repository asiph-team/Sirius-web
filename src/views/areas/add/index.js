import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/areas`
  const { data: { loading, error, items, temp }, postData, clean } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}/api/v1/employees?all`)
  const { items: data, loading: loadingEmployees, error: errorEmployees } = workstations
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} employees={data} />
      {loading && <AlertLoading message="Almacenando area de trabajo" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="El area de trabajo ha sido creada."
        callback={() => {
          document.getElementById('form-areas').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Add
