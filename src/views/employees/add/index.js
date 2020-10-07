import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'
import { singleDateFormatter } from '../../../utility/helpers/functions'

const Add = () => {
  const url = `${urlApi}/api/v1/employees`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}/api/v1/workstations?`)
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData({ ...values, date_start: singleDateFormatter(values.date_start, 'YYYY-MM-DD') }, url)} workstations={data} />
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
