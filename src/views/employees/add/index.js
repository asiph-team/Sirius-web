import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/employees'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: jobs } = useFetchResources('/api/v1/jobs')
  const { items: data, loading: loadingJobs, error: errorJobs } = jobs
  if (loadingJobs) return <LoadingSpinner />
  if (errorJobs) return <Error message={errorJobs} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} jobs={data} />
      {loading && <AlertLoading message="Almacenando trabajador" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="El trabajador ha sido creado."
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

export default Add
