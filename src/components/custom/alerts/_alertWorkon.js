import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Button } from 'reactstrap'
import { ContextAuth } from '../../../utility/context/Auth'

const AlertWorkon = (props) => {
  const {
    callback, title, paragraph, callbackCancel, enterprise,
  } = props
  const ButtonWorkon = (info) => {
    const { login } = info
    return (
      <Button
        color="primary"
        onClick={() => {
          login({ email: 'superadmin@asiph.cl', password: '123456', enterprise })
          callbackCancel()
        }}
      >
        OK
      </Button>
    )
  }
  const WorkAs = () => (
    <ContextAuth.Consumer>
      {({ workonAuthentication }) => (
        <ButtonWorkon login={workonAuthentication} />
      )}
    </ContextAuth.Consumer>
  )
  return (
    <SweetAlert
      title={title}
      onCancel={() => callbackCancel()}
      onConfirm={callback}
      cancelBtnText="Cancelar"
      warning
      customButtons={(
        <>
          <Button onClick={() => callbackCancel()} className="mr-2">Cancelar</Button>
          <WorkAs close={callbackCancel} />
        </>
      )}
    >
      <p>{paragraph}</p>
    </SweetAlert>
  )
}

export default AlertWorkon
