import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/trainings/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: employees } = useFetchResources('/api/v1/employees')
  const { items: data, loading: loadingEmployees, error: errorEmployees } = employees
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} employees={data} />
      {loading && <AlertLoading message="Actualizando capacitación" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La información de la capacitación ha sido actualizada."
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

export default Edit
