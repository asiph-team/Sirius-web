import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/area'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workers } = useFetchResources('/api/v1/workers')
  const { items: data, loading: loadingWorkers, error: errorWorkers } = workers
  if (loadingWorkers) return <LoadingSpinner />
  if (errorWorkers) return <Error message={errorWorkers} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} workers={data} />
      {loading && <AlertLoading message="Almacenando área de trabajo" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="El área de trabajo ha sido creada."
        callback={() => {
          document.getElementById('form-area').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Add
