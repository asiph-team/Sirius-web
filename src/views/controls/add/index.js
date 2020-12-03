import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'
import { formData } from '../../../utility/helpers/functions'

const Add = (props) => {
  const url = `${urlApi}${baseApiUrl}control_measures`
  const { location: { state } } = props
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: areas } = useFetchResources(`${urlApi}${baseApiUrl}activities?all`)
  const { items: data, loading: loadAreas, error: errorAreas } = areas
  if (loadAreas) return <LoadingSpinner />
  if (errorAreas) return <Error message={errorAreas} />
  return (
    <>
      <AddUI activity={state.activity_id} handleSubmit={(values) => postData(formData({ name: values.name, activity_id: values.activity_id, ...(values.image && { image: values.image }) }), url)} areas={data} />
      {loading && <AlertLoading message="Almacenando medida de control" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La medida de control ha sido creada."
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

export default Add
