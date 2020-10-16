import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/programs`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} />
      {loading && <AlertLoading message="Almacenando programa de vigilancia" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
      <AlertSuccess
        message="El programa de vigilancia ha sido creado."
        callback={() => {
          document.getElementById('form-programs').reset()
          clean()
          history.goBack()
        }}
      />
      )}
    </>
  )
}

export default Add
