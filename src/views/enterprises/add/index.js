import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/enterprises`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} />
      {loading && <AlertLoading message="Almacenando empresa" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="La empresa ha sido creada."
        callback={() => {
          document.getElementById('form-enterprises').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Add
