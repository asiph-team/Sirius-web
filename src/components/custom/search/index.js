import React, { useState } from 'react'
import { Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
import * as Icon from 'react-feather'

const Search = (props) => {
  const [data, setData] = useState('')
  const { icon, placeholder, search, param } = props
  const IconTag = Icon[icon]
  const handleSearch = () => {
    search(param, data)
  }
  return (
    <Col>
      <InputGroup className="mr-2">
        <Input placeholder={placeholder} onChange={(e) => setData(e.target.value)} />
        <InputGroupAddon addonType="append">
          <Button onClick={() => handleSearch()} color="primary">
            <IconTag size={15} />
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </Col>
  )
}

export default Search
