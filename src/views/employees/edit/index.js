import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/employees/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: jobs } = useFetchResources('/api/v1/jobs')
  const { items: data, loading: loadingJobs, error: errorJobs } = jobs
  if (loadingJobs) return <LoadingSpinner />
  if (errorJobs) return <Error message={errorJobs} />
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} employees={data} />
      {loading && <AlertLoading message="Actualizando trabajador" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La información del trabajador ha sido actualizada."
        callback={() => {
          document.getElementById('form-employees').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Edit
