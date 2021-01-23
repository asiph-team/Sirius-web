import React, { useState, useRef } from 'react'
import { Field } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { PlusCircle } from 'react-feather'
import { InputGroup, InputGroupAddon, Input, Button, FormGroup, Label } from 'reactstrap'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import Select from 'react-select'
import { formatRut, validateRut } from '@fdograph/rut-utilities'
import SignatureCanvas from 'react-signature-canvas'
import CardImg from 'reactstrap/lib/CardImg'

registerLocale('es', es)
const SelectField = (props) => {
  const {
    options, field, form, multiple, disabled,
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
      isDisabled={disabled}
    />
  )
}
const SelectFieldModal = (props) => {
  const {
    options, field, form, multiple, disabled, show, userId,
  } = props
  const { values } = form
  const { name, value } = field
  if (userId) { values.user_id = userId }
  const handleModal = (e) => {
    e.preventDefault()
    show(null, 'contact')
  }
  return (
    <div className="row">
      <div className="col-10">
        <Select
          className="basic-single w-full"
          classNamePrefix="select"
          name={name}
          options={options}
          onChange={(option) => option && form.setValues({ ...values, [name]: option.value })}
          value={options.find((option) => (option.value === (value || userId)) || (option.label === (value || userId)))}
          isSearchable
          placeholder=""
          isMulti={!!multiple}
          isDisabled={disabled}
        />
      </div>
      <div className="col d-flex justify-content-end">
        <Button color="primary" onClick={(e) => handleModal(e)}>
          <PlusCircle size={14} />
        </Button>
      </div>
    </div>
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
    name, title, type, small, disabled, placeholder,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        className="form-control"
        name={name}
        type={type}
        autoComplete="off"
        disabled={!!disabled}
        placeholder={placeholder}
      />
    </>
  )
}

const CustomInputFieldRUT = (props) => {
  const { field, form } = props
  const { name, value } = field
  const rutFormatting = (e) => {
    return validateRut(e) ? form.setFieldValue('rut', formatRut(e)) : form.setFieldValue('rut', e)
  }
  return (
    <Input
      name={name}
      className="form-control"
      value={value}
      onChange={(e) => rutFormatting(e.target.value)}
      autoComplete="off"
    />
  )
}

export const CustomInputRUT = (props) => {
  const {
    name, title, type, small, disabled, placeholder,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        className="form-control"
        name={name}
        type={type}
        component={CustomInputFieldRUT}
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
    name, title, options, small, multiple, disabled,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={SelectField}
        multiple={multiple}
        disabled={disabled}
      />
    </>
  )
}
const SelectFieldCheckbox = (props) => {
  const {
    options, field, form, multiple, disabled,
  } = props
  const { name, value } = field
  const { values: { rol } } = form
  const [isDisabled, setDisabled] = useState(rol === 'chief_of_area' ? !disabled : disabled)
  const toggleSelect = (e) => {
    setDisabled(e)
    form.setFieldValue('is_chief_of_area', e)
  }
  return (
    <>
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
        isDisabled={isDisabled}
      />
      <div className="form-check d-flex align-items-center">
        <Input value={isDisabled} type="checkbox" checked={isDisabled} name="is_chief_of_area" className="form-check-input" id="ChiefOfAreaCheck" onChange={() => toggleSelect(!isDisabled)} />
        <label className="form-check-label" htmlFor="ChiefOfAreaCheck">Jefe área</label>
      </div>
    </>
  )
}
export const CustomSelectCheckbox = (props) => {
  const {
    name, title, options, small, multiple, disabled,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={SelectFieldCheckbox}
        multiple={multiple}
        disabled={disabled}
      />
    </>
  )
}

export const CustomSelectModal = (props) => {
  const {
    name, title, options, small, disabled, show, placeholder, userId
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={SelectFieldModal}
        disabled={disabled}
        show={show}
        placeholder={placeholder}
        userId={userId}
      />
    </>
  )
}

const MultipleSelectField = (props) => {
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
      onChange={(option) => option && form.setFieldValue(name, option.map((item) => item.value))}
      defaultValue={options.filter((option) => value.includes(option.value))}
      isSearchable
      isMulti={!!multiple}
      closeMenuOnSelect={false}
      placeholder=""
    />
  )
}

export const MultipleCustomSelect = (props) => {
  const {
    name, title, options, small, multiple,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        options={options}
        name={name}
        component={MultipleSelectField}
        multiple={multiple}
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
  const { name, value } = field
  const [img, setImg] = useState(value)
  const { values } = form
  const handleFileUpload = (event) => {
    let reader = new FileReader()
    let file = event.target.files[0]
    reader.onloadend = () => {
      setImg(reader.result)
    }
    reader.readAsDataURL(file)
  }
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
          handleFileUpload(event)
        }}
      />
      <CardImg src={img} className="mt-1" />
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

const CustomInputFieldAddonCheckbox = (props) => {
  const { field, form, disabled, type } = props
  const { name, value } = field
  const [isDisabled, setDisabled] = useState(value !== '' ? !disabled : disabled)
  return (
    <>
      <div className="mb-3 input-group">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <input
              type="checkbox"
              checked={!isDisabled}
              onChange={() => setDisabled(!isDisabled)}
            />
          </span>
        </div>
        <Input
          placeholder="Revisiones mensuales"
          type={type}
          value={value}
          onChange={(e) => form.setFieldValue(name, e.target.value)}
          className="form-control"
          disabled={isDisabled}
        />
      </div>
    </>
  )
}

export const CustomInputAddonCheckbox = (props) => {
  const {
    name, title, small, disabled, type,
  } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component={CustomInputFieldAddonCheckbox}
        disabled={disabled}
        type={type}
      />
    </>
  )
}

const CustomSignature = (props) => {
  const { field, form } = props
  const { name } = field
  const sigCanvas = useRef({})
  const clear = () => { sigCanvas.current.clear(); form.setFieldValue(name, '') }
  const toForm = () => form.setFieldValue(name, sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'))
  return (
    <>
      <div className="d-flex align-items-center justify-content-end">
        <SignatureCanvas
          ref={sigCanvas}
          canvasProps={
            {
              width: 600,
              height: 200,
              className: 'sigCanvas border',
              style: { width: '100%' },
            }
          }
          onEnd={() => toForm()}
        />
      </div>
      <div className="mt-1 d-flex align-items-center justify-content-end">
        <Button onClick={() => clear()}>Limpiar firma</Button>
      </div>
    </>
  )
}

export const CustomSignatureInput = (props) => {
  const { name, title, small } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component={CustomSignature}
      />
    </>
  )
}

const CheckboxGroup = (props) => {
  const { field, options } = props
  const { name, value } = field
  return (
    <>
      <div className="d-flex flex-wrap my-1">
        {
          options && options.map((risk) => (
            <FormGroup check className="col-lg-3 my-1">
              <Label check className={value && value.includes(risk.id) ? 'font-weight-bold' : null}>
                <Field
                  name={name}
                  value={risk.id}
                  type="checkbox"
                />
                {' '}
                {risk.name}
              </Label>
            </FormGroup>
          ))
        }
      </div>
    </>
  )
}

export const CustomCheckboxGroup = (props) => {
  const { name, title, small, risks, options } = props
  return (
    <>
      <label htmlFor={name}>{`${title} ${small || ''}`}</label>
      <Field
        name={name}
        component={CheckboxGroup}
        risks={risks}
        options={options}
      />
    </>
  )
}