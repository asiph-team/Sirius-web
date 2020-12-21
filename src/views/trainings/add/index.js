import React from 'react'
import moment from 'moment'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/trainings`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: employees } = useFetchResources(`${urlApi}/api/v1/employees?`)
  const { items: data, loading: loadingEmployees, error: errorEmployees } = employees
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData({ description: values.description, end_date: moment(values.end_date).format('YYYY-MM-DD'), frequency: values.frequency, name: values.name, start_date: moment(values.start_date).format('YYYY-MM-DD'), employees_id: values.employees_id }, url)} employees={data} />
      {loading && <AlertLoading message="Almacenando capacitación" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La capacitación ha sido creada."
          callback={() => {
            document.getElementById('form-trainings').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Add
