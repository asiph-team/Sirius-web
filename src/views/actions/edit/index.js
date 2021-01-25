import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'
import { urlApi } from '../../../utility/helpers/consts'
import { singleDateFormatter } from '../../../utility/helpers/functions'

const Edit = (props) => {
  const url = 'actions'
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: workstations } = useFetchResources('employees?all&rol=chief_of_area')
  const { items: data, loading: loadingEmployees, error: errorEmployees } = workstations
  if (loadingEmployees) return <LoadingSpinner />
  if (errorEmployees) return <Error message={errorEmployees} />
  return (
    <>
      <EditUI handleSubmit={(values) => update({ name: values.name, origin: values.origin, priority: values.priority, manager_id: values.manager_id, date_initial: singleDateFormatter(values.date_initial, 'YYYY-MM-DD'), date_committed: singleDateFormatter(values.date_committed, 'YYYY-MM-DD') }, `${url}/${values.id}`)} {...props} employees={data} />
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

export default Edit
