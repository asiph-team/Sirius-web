import React, { useState } from 'react'
import { Header } from '../../../components/custom'
import { CreateModal } from '../../../components/custom/modals'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const options = employees ? employees.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })) : null
  const [placeholder, setPlaceholder] = useState({ user_id: '' })
  const [visibility, setVisibility] = useState({ contact: false, remove: false, status: false })
  const [selected, setSelected] = useState({})
  const [listEmp, setListEmp] = useState(options)
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const addEmployee = (emp) => {
    const newEmployee = { label: `${emp.name} ${emp.lastname}`, value: emp.id }
    setListEmp([...options, newEmployee])
    setPlaceholder({ user_id: newEmployee.value })
  }
  return (
    <>
      <Header title="Agregar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={listEmp} show={show} placeholder={placeholder} />
      {
        visibility.contact && (
          <CreateModal
            addEmployee={addEmployee}
            visibility={visibility.contact}
            onClose={() => setVisibility({ ...visibility, contact: false })}
            item={selected}
          />
        )
      }
    </>
  )
}

export default AddUI
