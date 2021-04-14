import React from 'react'
import moment from 'moment'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { usePostResources, useFetchResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const { location: { state: { placeholder } } } = props
  const { data: { loading, error, items }, clean, update } = usePostResources()
  const { items: employees } = useFetchResources('employees?')
  const { items: participants } = useFetchResources(`programs/${placeholder.id}/employees?all`)
  const { items: employeesData, loading: loadingEmployees, error: errorEmployees } = employees
  const { items: participantsData, loading: loadingParticipants, error: errorParticipants } = participants
  if (loadingEmployees || loadingParticipants) return <LoadingSpinner />
  if (errorEmployees || errorParticipants) return <Error message={error.message} />
  return (
    <>
      <EditUI
        handleSubmit={(values) => update({
          name: values.name,
          description: values.description,
          employees_id: values.employees_id,
          end_date: moment(values.end_date).format('YYYY-MM-DD'),
          start_date: moment(values.start_date).format('YYYY-MM-DD'),
          frequency: values.frequency,
        }, `programs/${values.id}`)}
        {...props}
        employees={employeesData}
        participants={participantsData}
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
