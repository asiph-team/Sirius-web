import React from 'react'
import { Field } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import DatePicker from 'react-datepicker'
import Select from 'react-select'

const SelectField = (props) => {
  const {
    options, field, form,
  } = props
  const { name, value } = field
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name={name}
      options={options}
      onChange={(option) => option && form.setFieldValue(name, option.value)}
      defaultValue={options.find((option) => (option.value === value) || (option.label === value))}
      isSearchable
      placeholder=""
    />
  )
}

const DatePickerField = (props) => {
  const { field, form } = props
  const { name, value } = field
  return (
    <DatePicker
      name={name}
      className="form-control"
      dateFormat="dd/MM/yyyy"
      selected={value}
      onChange={(date) => {
        form.setFieldValue(name, date)
      }}
    />
  )
}

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

export const CustomTextArea = (props) => {
  const {
    name, title, small, rows,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component="textarea"
        className="form-control"
        rows={rows}
      />
    </>
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

export const CustomDatePicker = (props) => {
  const {
    name, title, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component={DatePickerField}
      />
    </>
  )
}
