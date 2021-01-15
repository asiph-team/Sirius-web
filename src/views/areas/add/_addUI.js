import React, { useState } from 'react'
import { Header } from '../../../components/custom'
import { CreateModal } from '../../../components/custom/modals'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const options = employees ? employees.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })) : null
  const [placeholder, setPlaceholder] = useState(null)
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
    setPlaceholder(newEmployee.value)
  }
  return (
    <>
      <Header title="Agregar área de trabajo" icon="Box" />
      <h2 onClick={() => addEmployee({ name: 'Nombre del pelao', id: '41255b50-5692-11eb-bcca-71566b8b2eeb' })}>asdasd</h2>
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={listEmp} show={show} userId={placeholder} />
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
