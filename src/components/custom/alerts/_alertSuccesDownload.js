import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Download } from 'react-feather'
import { Button } from 'reactstrap'

const AlertSuccessDownload = (props) => {
  const { callback, message, callBackCancel } = props
  return (
    <SweetAlert
      title=""
      confirmBtnText="Descargar"
      onConfirm={() => callback()}
      success
      customButtons={(
        <>
          <Button onClick={() => callBackCancel()} color="light" className="d-flex justify-content-center items-align-center mr-1">
            Cancelar
          </Button>
          <Button onClick={() => callback()} color="primary" className="d-flex justify-content-center items-align-center ml-1">
            <Download size={14} />
                &nbsp;Descargar
          </Button>
        </>
      )}
    >
      <h1>¡Listo!</h1>
      <p>{message}</p>
    </SweetAlert>
  )
}

export default AlertSuccessDownload
