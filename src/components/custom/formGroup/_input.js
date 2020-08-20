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

const SelectField = (props) => {
  const {
    options, field, form,
  } = props
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name={field.name}
      options={options}
      onChange={(option) => option && form.setFieldValue(field.name, option.value)}
      defaultValue={options.find((option) => option.value === field.value)}
      isSearchable
      placeholder=""
    />
  )
}

export const CustomSelect = (props) => {
  const {
    name, title, options, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={SelectField}
      />
    </>
  )
}
