import React from 'react'
import { Field } from 'formik'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import Select from 'react-select'

export const CustomInput = (props) => {
  const {
    name, title, type, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        className="form-control"
        name={name}
        type={type}
      />
    </>
  )
}

export const CustomInputAddon = (props) => {
  const {
    name, title, type, prepend, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <InputGroup>
        <InputGroupAddon addonType="prepend">{prepend}</InputGroupAddon>
        <Input name={name} tag={Field} type={type} />
      </InputGroup>
    </>
  )
}

export const CustomSelect = (props) => {
  const {
    name, title, options, setFieldValue, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Select
        className="basic-single"
        classNamePrefix="select"
        name={name}
        tag={Field}
        options={options}
        onChange={(option) => option && setFieldValue(name, option.value)}
        isClearable
        isSearchable
      />
    </>
  )
}
