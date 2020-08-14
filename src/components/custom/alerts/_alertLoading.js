import React from 'react'
import SweetAlert from 'react-bootstrap-sweetalert'
import { Spinner } from 'reactstrap'

const Loading = (props) => {
  const { message } = props
  return (
    <SweetAlert
      title=""
      allowOutsideClick={false}
      showConfirm={false}
      onConfirm={() => null}
    >
      <div className="my-2">
        <h1 className="mb-1">{message}</h1>
        <Spinner type="grow" color="primary" />
      </div>
    </SweetAlert>
  )
}

export default Loading
