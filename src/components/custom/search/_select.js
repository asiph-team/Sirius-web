import React from 'react'
import { Col } from 'reactstrap'
import Select from 'react-select'

const Search = (props) => {
  const { search, param, temp, title } = props
  const selected = (temp !== null && temp !== undefined && temp.type === param) ? temp.value : ''
  const options = [
    { value: 'active', label: 'Activas' },
    { value: 'inactive', label: 'Inactivas' },
    { value: 'all', label: 'Todas' },
  ]

  return (
    <Col lg="3" sm="mt-1" className="my-1">
      <Select
        classNamePrefix="select"
        name="select-list"
        options={options}
        isSearchable
        placeholder={title}
        defaultValue={options && options.find((option) => (option.value === selected) || (option.label === selected))}
        onChange={(e) => search(param, { type: 'select', value: e.value })}
        isMulti={false}
      />
    </Col>
  )
}

export default Search
