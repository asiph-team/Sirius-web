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
  const url = 'employees'
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: workstations } = useFetchResources('workstations?all')
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      <EditUI
        handleSubmit={(values) => update({
          address: values.address,
          date_start: moment(values.date_start).format('YYYY-MM-DD'),
          name: values.name,
          lastname: values.lastname,
          rut: values.rut,
          email: values.email,
          phone: values.phone,
          size: values.size,
          size_pants: values.size_pants,
          size_shoe: values.size_shoe,
          observation: values.observation,
          is_chief_of_area: values.is_chief_of_area ? values.is_chief_of_area : values.workstation_id ? false : true,
          ...(values.workstation_id && { workstation_id: values.workstation_id }),
        }, `${url}/${values.id}`)}
        {...props}
        employees={data}
      />
      {loading && <AlertLoading message="Actualizando trabajador" />}
      {error && <AlertError error={error} callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La información del trabajador ha sido actualizada."
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

export default Edit
