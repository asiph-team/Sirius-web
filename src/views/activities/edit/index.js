import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import EditUI from './_editUI'

const Edit = (props) => {
  const url = 'activities'
  const { data: { loading, error, items }, update, clean } = usePostResources()
  const { items: workstations } = useFetchResources('workstations?all')
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  const { items: risksList } = useFetchResources('risks')
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      {
        data && risksList && (
          <EditUI
            handleSubmit={(values) => update({
              name: values.name,
              description: values.description,
              workstations_id: [values.workstation],
              risk: values.risk,
              risks_id: values.risks_id,
            }, `${url}/${values.id}`)}
            {...props}
            workstations={data.data.data}
            risks={risksList.items}
          />
        )
      }
      {loading && <AlertLoading message="Actualizando actividad" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La actividad ha sido actualizada."
          callback={() => {
            document.getElementById('form-activities').reset()
            clean()
            history.goBack()
          }}
        />
      )}
    </>
  )
}

export default Edit
