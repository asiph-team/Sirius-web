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
  const url = `${urlApi}/api/v1/actions`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}/api/v1/employees?rol=employees`)
  const { items: data, loading: loadingEmployees, error: errorEmployees } = workstations
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData({ ...values, date_initial: singleDateFormatter(values.date_initial, 'YYYY-MM-DD'), date_committed: singleDateFormatter(values.date_committed, 'YYYY-MM-DD') }, url)} employees={data} />
      {loading && <AlertLoading message="Almacenando plan de acción" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="El plan de acción ha sido creado."
          callback={() => {
            document.getElementById('form-actions').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Add
