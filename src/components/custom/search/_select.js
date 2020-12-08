import React from 'react'
import { Col } from 'reactstrap'
import Select from 'react-select'

const Search = (props) => {
  const { search, param, temp } = props
  const selected = (temp !== null && temp.type === 'select') ? temp.value : ''
  const options = [
    { value: 'active', label: 'Activas' },
    { value: 'inactive', label: 'Inactivas' },
    { value: 'all', label: 'Todas' },
  ]

  return (
    <Col>
      <Select
        className="w-full"
        classNamePrefix="select"
        name="select-list"
        options={options}
        isSearchable
        placeholder="Estado"
        defaultValue={options && options.find((option) => (option.value === selected) || (option.label === selected))}
        onChange={(e) => search(param, { type: 'select', value: e.value })}
        isMulti={false}
      />
    </Col>
  )
}

export default Search
