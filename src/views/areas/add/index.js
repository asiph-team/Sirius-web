import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/area'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} />
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
