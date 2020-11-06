import React, { useState } from 'react'
import { Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
import * as Icon from 'react-feather'

const Search = (props) => {
  const { placeholder, search, param, temp } = props
  const [data, setData] = useState(temp)
  const [status, setStatus] = useState(true)
  const handleSearch = () => {
    search(param, data)
  }
  const handleCleanSearch = () => {
    search(param, '')
  }

  const handleClean = () => {
    setData('')
    setStatus(false)
  }
  const enterCheck = (event) => {
    if (event.keyCode === 13) {
      handleSearch()
    }
  }
  return (
    <Col>
      <InputGroup className="mr-2">
        <Input autoFocus="true" value={data} placeholder={placeholder} onChange={(e) => setData(e.target.value)} onKeyDown={(e) => enterCheck(e)} onClick={() => handleClean()} />
        <InputGroupAddon addonType="append">
          {
            temp && status ? (
              <Button onClick={() => handleCleanSearch()} color="primary">
                <Icon.XCircle size={15} />
              </Button>
            ) : (
              <Button onClick={() => handleSearch()} color="primary">
                <Icon.Search size={15} />
              </Button>
            )
          }
        </InputGroupAddon>
      </InputGroup>
    </Col>
  )
}

export default Search
