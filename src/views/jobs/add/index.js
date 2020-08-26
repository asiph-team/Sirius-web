import React from 'react'
import { history } from '../../../history'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/jobs'
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} />
      {loading && <AlertLoading message="Almacenando puesto" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="El puesto de trabajo ha sido creado."
          callback={() => {
            document.getElementById('form-jobs').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Add
