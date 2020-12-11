import React from 'react'
import moment from 'moment'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { usePostResources, useFetchResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const Edit = (props) => {
  const { data: { loading, error, items }, clean, update } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}${baseApiUrl}workstations?all`)
  const { items: employees } = useFetchResources(`${urlApi}${baseApiUrl}employees?`)
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  const { items: employeesData } = employees
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={error.message} />
  return (
    <>
      <EditUI
        handleSubmit={(values) => update({
          name: values.name,
          description: values.description,
          workstations_id: [values.workstations_id],
          employees_id: [values.employees_id],
          end_date: moment(values.end_date).format('YYYY-MM-DD'),
          start_date: moment(values.start_date).format('YYYY-MM-DD'),
          frequency: values.frequency,
        }, `${urlApi}${baseApiUrl}programs/${values.id}`)}
        {...props}
        workstations={data}
        employees={employeesData}
      />
      {loading && <AlertLoading message="Actualizando vigilancia médica" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información de la vigilancia médica ha sido actualizada."
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

export default Edit
