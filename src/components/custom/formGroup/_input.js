import React from 'react'
import { Field } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import Select from 'react-select'

registerLocale('es', es)
const SelectField = (props) => {
  const {
    options, field, form, multiple,
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
      isMulti={!!multiple}
    />
  )
}

const MultipleSelectField = (props) => {
  const {
    options, field, form, multiple, defaultData,
  } = props
  const { name } = field
  return (
    <Select
      className="basic-single"
      classNamePrefix="select"
      name={name}
      options={options}
      onChange={(option) => option && form.setFieldValue(name, option.map((item) => item.value))}
      defaultValue={defaultData}
      isSearchable
      placeholder=""
      isMulti={!!multiple}
    />
  )
}

const DatePickerField = (props) => {
  const { field, form } = props
  const { name, value } = field
  return (
    <DatePicker
      locale="es"
      name={name}
      className="form-control"
      dateFormat="dd/MM/yyyy"
      selected={value}
      onChange={(date) => {
        form.setFieldValue(name, date)
      }}
      autoComplete="off"
      showMonthDropdown
      showYearDropdown
    />
  )
}

export const CustomInput = (props) => {
  const {
    name, title, type, small, disabled,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        className="form-control"
        name={name}
        type={type}
        autoComplete="nofill"
        disabled={!!disabled}
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
    name, title, options, small, multiple,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={SelectField}
        multiple={multiple}
      />
    </>
  )
}

export const MultipleCustomSelect = (props) => {
  const {
    name, title, options, small, multiple, defaultData,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={MultipleSelectField}
        multiple={multiple}
        defaultData={defaultData}
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
        autoComplete="off"
      />
    </>
  )
}

const CustomFileInputField = (props) => {
  const {
    form, field,
  } = props
  const { name } = field
  const { values } = form
  console.log('field', field)
  return (
    <>
      <Input
        className="form-control"
        name={name}
        type="file"
        onChange={(event) => {
          form.setValues({
            ...values,
            [name]: event.target.files[0],
          })
        }}
      />
    </>
  )
}
export const CustomFileInput = (props) => {
  const {
    name, title, small,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component={CustomFileInputField}
      />
    </>
  )
}
