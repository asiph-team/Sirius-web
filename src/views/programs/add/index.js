import React from 'react'
import moment from 'moment'
import { history } from '../../../history'
import {
  AlertError, AlertLoading, AlertSuccess, Error,
} from '../../../components/custom'
import { LoadingSpinner } from '../../../components/@vuexy/Spinner'
import { usePostResources, useFetchResources } from '../../../utility/customHooks/resources'
import AddUI from './_addUI'
import { urlApi, baseApiUrl } from '../../../utility/helpers/consts'

const Add = () => {
  const url = `${urlApi}/api/v1/programs`
  const { data: { loading, error, items }, postData, clean } = usePostResources()
  const { items: employees } = useFetchResources(`${urlApi}${baseApiUrl}employees?`)
  const { items: workstations } = useFetchResources(`${urlApi}${baseApiUrl}workstations?all`)
  const { items: data } = workstations
  const { items: employeesData } = employees
  if (loading) return <LoadingSpinner />
  if (error) return <Error message={error} />
  return (
    <>
      <AddUI handleSubmit={(values) => postData({ ...values, start_date: moment(values.start_date).format('YYYY-MM-DD'), end_date: moment(values.start_date).format('YYYY-MM-DD') }, url)} workstations={data} employees={employeesData} />
      {loading && <AlertLoading message="Almacenando vigilancia médica" />}
      {error && <AlertError callback={() => clean()} />}
      {items && (
        <AlertSuccess
          message="La vigilancia médica ha sido creada."
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

export default Add
