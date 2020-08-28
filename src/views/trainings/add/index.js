import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/trainings'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: employees } = useFetchResources('/api/v1/employees')
  const { items: data, loading: loadingEmployees, error: errorEmployees } = employees
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} employees={data} />
      {loading && <AlertLoading message="Almacenando capacitación" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La capacitación ha sido creada."
        callback={() => {
          document.getElementById('form-trainings').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Add
