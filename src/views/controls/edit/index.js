import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'
import { formData } from '../../../utility/helpers/functions'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/control_measures`
  const { data: { loading, error, items }, updateFiles, clean } = usePostResources()
  const { items: activities } = useFetchResources(`${urlApi}/api/v1/activities?all`)
  const { items: data, loading: loadingActivities, error: errorActivities } = activities
  if (loadingActivities) return <LoadingSpinner />
  if (errorActivities) return <Error message={errorActivities} />
  return (
    <>
      <EditUI handleSubmit={(values) => updateFiles(formData({ name: values.name, activity_id: values.activity_id, ...(values.image && { image: values.image }), _method: 'PUT' }), `${url}/${values.id}`)} {...props} activities={data} />
      {loading && <AlertLoading message="Actualizando medida de control" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información de la medida de control ha sido actualizada."
          callback={() => {
            document.getElementById('form-controls').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
