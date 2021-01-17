import React from 'react'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { useFetchResources, usePostResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/activities`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: workstations } = useFetchResources(`${urlApi}${baseApiUrl}workstations`)
  const { items: risksList } = useFetchResources(`${urlApi}${baseApiUrl}risks`)
  const { items: data, loading: loadingWorkstations, error: errorWorkstations } = workstations
  if (loadingWorkstations) return <LoadingSpinner />
  if (errorWorkstations) return <Error message={errorWorkstations} />
  return (
    <>
      {
        data && risksList && (
          <AddUI
            handleSubmit={(values) => postData(
              {
                name: values.name,
                description: values.description,
                workstations_id: [values.workstation],
                risk: values.risk,
                risks_id: values.risks_id,
              }, url,
            )}
            workstations={data.data.data}
            risks={risksList.items}
          />
        )
      }
      {loading && <AlertLoading message="Almacenando actividad" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La actividad ha sido creada."
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

export default Add
