import React, { useState } from 'react'
import { Button, Card, CardBody } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle } from 'react-feather'
import { ContactInfoEnterprise } from '../../../components/custom/modals'

import {
  AlertDialog, Header, List,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationBasic from '../../../components/custom/pagination'

const ListUI = (props) => {
  const {
    data,
    remove,
    changeStatus,
    pagination,
  } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false, status: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  return (
    <>
      <Header title="Empresas" icon="Shield">
        <Link to="/dashboard/enterprises/add">
          <Button color="primary">
            <PlusCircle size={14} />
                &nbsp;Agregar empresa
          </Button>
        </Link>
      </Header>
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={data.data.data}
                headers={headers}
                show={show}
                resource="enterprises"
                contact
              />
            )
          }
        </CardBody>
      </Card>
      <ContactInfoEnterprise
        visibility={visibility.contact}
        onClose={() => setVisibility({ ...visibility, contact: false })}
        item={selected}
      />
      {
        visibility.remove && (
          <AlertDialog
            title={`¿Estás seguro de eliminar a ${selected.name}?`}
            paragraph="Estas operación es irreversible, se eliminará toda la información respecto a la empresa."
            callback={() => remove({ id: selected.id }, null)}
            callbackCancel={() => setVisibility({ ...visibility, remove: false })}
          />
        )
      }
      {
        visibility.status && (
          <AlertDialog
            title={`¿Estás seguro de ${selected.status ? 'desactivar' : 'activar'} a ${selected.name}?`}
            paragraph={`Esta operación ${selected.status ? 'desactivara' : 'activara'} a la empresa en la plataforma.`}
            callback={() => changeStatus({ ...selected, status: !selected.status }, null)}
            callbackCancel={() => setVisibility({ ...visibility, status: false })}
          />
        )
      }
      {
        data && (
          <PaginationBasic data={data.data} pagination={pagination} />
        )
      }

    </>
  )
}

export default ListUI
