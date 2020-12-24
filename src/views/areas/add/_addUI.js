import React, { useState } from 'react'
import { Header } from '../../../components/custom'
import { CreateModal } from '../../../components/custom/modals'
import FormUI from '../_form'

const AddUI = (props) => {
  const { handleSubmit, employees } = props
  const options = employees ? employees.data.data.map((item) => ({ label: `${item.name} ${item.lastname}`, value: item.id })) : null
  const [visibility, setVisibility] = useState({ contact: false, remove: false, status: false })
  const [selected, setSelected] = useState({})
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <Header title="Agregar área de trabajo" icon="Box" />
      <FormUI handleSubmit={handleSubmit} title="Agregar" options={options} show={show} />
      {
        visibility.contact && (
          <CreateModal
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
