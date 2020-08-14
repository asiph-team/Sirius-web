import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'

const AlertDialog = (props) => {
  const {
    callback, title, paragraph, callbackCancel,
  } = props
  return (
    <SweetAlert
      title={title}
      onCancel={() => callbackCancel()}
      onConfirm={callback}
      cancelBtnText="Cancelar"
      showCancel
      warning
    >
      <p>{paragraph}</p>
    </SweetAlert>
  )
}

export default AlertDialog
