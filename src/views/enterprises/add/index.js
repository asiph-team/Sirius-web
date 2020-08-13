import React from 'react'
import { AlertError, AlertLoading, AlertSuccess } from '../../../components/custom'
import { usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'

const Add = () => {
  const url = 'api/v1/enterprises'
  const { data: { loading, error, data }, postData, clean } = usePostResources()
  return (
    <>
      <AddUI handleSubmit={(values) => postData(values, url)} />
      {loading && <AlertLoading />}
      {error && <AlertError callback={() => clean()} />}
      {data && (
      <AlertSuccess
        message="Se ha creado una nueva empresa."
        callback={() => {
          document.getElementById('add-enterprises').reset()
          clean()
        }}
      />
      )}
    </>
  )
}

export default Add
