import React from 'react'
import moment from 'moment'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const url = `${urlApi}/api/v1/trainings`
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: employees } = useFetchResources('/api/v1/employees')
  const { items: data, loading: loadingEmployees, error: errorEmployees } = employees
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <EditUI handleSubmit={(values) => update({ id: values.id, description: values.description, end_date: moment(values.end_date).format('YYYY-MM-DD'), start_date: moment(values.start_date).format('YYYY-MM-DD'), frequency: values.frequency, name: values.name, employees_id: [values.employees] }, `${url}/${values.id}`)} {...props} employees={data} />
      {loading && <AlertLoading message="Actualizando capacitación" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información de la capacitación ha sido actualizada."
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

export default Edit
