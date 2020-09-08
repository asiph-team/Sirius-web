import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'api/v1/activities/update'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workstations } = useFetchResources('/api/v1/workstations')
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      <EditUI handleSubmit={(values) => postData(values, url)} {...props} workstations={data} />
      {loading && <AlertLoading message="Actualizando actividad" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La actividad ha sido actualizada."
        callback={() => {
          document.getElementById('form-activities').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Edit
