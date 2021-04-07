import React, { useState, useRef } from 'react'
import Select, { defaultTheme } from 'react-select'
import { FormGroup as Fgroup } from 'reactstrap'

export const CustomSelect = (props) => {
  const {
    name, title, options, small, multiple, disabled, style, isLoading, filterEmployees, filterWorkstations, search, filter, value,
  } = props

  const [localValue, setLocalValue] = useState(value)

  const handleChange = (option) => {
    setLocalValue(option.value)
    localStorage.setItem(name, option.value)
    if (filterEmployees) {
      filterEmployees(`&${name}=${option.value}`)
    }
    if (filterWorkstations) {
      filterWorkstations(`&${name}=${option.value}`)
    }
    if (name === 'area_id') {
      //form.setFieldValue('workstation_id', '_all_')
      console.log(`name dentro del if`, name)
      //console.log(`form`, form)
    }
    search(
      //filterParams(form.values, { name, value: option.value }),
      //form.values,
    )
  }
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <>
        <Select
          className="basic-single"
          classNamePrefix="select sm"
          name={name}
          options={options}
          onChange={(option) => option && handleChange(option)}
          defaultValue={options.find((option) => (option.value === localValue) || (option.label === localValue))}
          isSearchable
          placeholder=""
          isMulti={!!multiple}
          isDisabled={disabled}
          isLoading={isLoading}
        />
        <>
          N: {name} - V:{localValue}
        </>
      </>
    </>
  )
}