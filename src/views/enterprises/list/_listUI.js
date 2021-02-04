import React, { useState } from 'react'
import { Button, Card, CardBody, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { PlusCircle, Eye } from 'react-feather'
import { ContactInfoEnterprise } from '../../../components/custom/modals'

import {
  AlertDialog, Header, List, Search, SelectSearch, AlertWorkon,
} from '../../../components/custom'
import { headers } from './_headers'
import PaginationBasic from '../../../components/custom/pagination'
import { ContextAuth } from '../../../utility/context/Auth'

const ListUI = (props) => {
  const {
    data,
    remove,
    changeStatus,
    pagination,
    search,
    temp,
    ordering,
  } = props
  const [selected, setSelected] = useState({})
  const [visibility, setVisibility] = useState({ contact: false, remove: false, status: false })
  const show = (item, type, visible = true) => {
    setSelected(item)
    setVisibility({ ...visibility, [type]: visible })
  }
  const transformData = () => data.data.data.map((item) => ({
    ...item,
    global_performance: item.global_performance === undefined ? '--' : `${Math.round(item.global_performance)}%`,
  }))
  const ButtonWorkon = (info) => {
    const { login, enterprise } = info
    return (
      <Button color="link" className="p-0" onClick={() => login({ email: 'superadmin@asiph.cl', password: '123456', enterprise })}>
        {' '}
        <Eye size={20} />
      </Button>
    )
  }
  const WorkAs = (enterprise) => (
    <ContextAuth.Consumer>
      {({ workonAuthentication }) => (
        <ButtonWorkon login={workonAuthentication} enterprise={enterprise} />
      )}
    </ContextAuth.Consumer>
  )
  return (
    <>
      <Header title="Empresas" icon="Shield">
        <Search placeholder="Buscar por nombre" search={search} icon="Search" temp={temp} param="filter" />
        <SelectSearch search={search} temp={temp} param="status" title="Estado de empresas" />
        <Col lg="auto">
          <Link to="/dashboard/enterprises/add">
            <Button color="primary">
              <PlusCircle size={14} />
                &nbsp;Agregar empresa
            </Button>
          </Link>
        </Col>
      </Header>
      <Card>
        <CardBody>
          {
            data && (
              <List
                data={transformData()}
                headers={headers}
                show={show}
                resource="enterprises"
                contact
                ordering={ordering}
              />
            )
          }
        </CardBody>
      </Card>
      {
        visibility.contact && (
          <ContactInfoEnterprise
            visibility={visibility.contact}
            onClose={() => setVisibility({ ...visibility, contact: false })}
            item={selected}
          />
        )
      }
      {
        visibility.workon && (
          <AlertWorkon
            title={`¿Quiere actuar en ${selected.name}?`}
            paragraph="Podrás operar como administrador de la empresa seleccionada."
            callback={() => WorkAs()}
            callbackCancel={() => setVisibility({ ...visibility, workon: false })}
            enterprise={{
              name: selected.name,
              subDomain: selected.sub_domain,
            }}
          />
        )
      }
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
            callback={() => {
              changeStatus(
                {
                  CLR: selected.CLR,
                  CTR: selected.CTR,
                  LR: selected.LR,
                  TR: selected.TR,
                  address: selected.address,
                  email: selected.email,
                  heading: selected.heading,
                  id: selected.id,
                  name: selected.name,
                  phone: selected.phone,
                  rut: selected.rut,
                  size: selected.size,
                  spin: selected.spin,
                  status: !selected.status,
                }, 'status',
              )
              setVisibility({ ...visibility, status: false })
            }}
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
