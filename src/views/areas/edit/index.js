import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/areas/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workers } = useFetchResources('/api/v1/workers')
  const { items: data, loading: loadingWorkers, error: errorWorkers } = workers
  if (loadingWorkers) return <LoadingSpinner />
  if (errorWorkers) return <Error message={errorWorkers} />
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} workers={data} />
      {loading && <AlertLoading message="Actualizando área de trabajo" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La información del área de trabajo ha sido actualizada."
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

export default Edit
