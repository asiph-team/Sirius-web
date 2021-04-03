import React, { useState, useRef } from 'react'
import { Field } from 'formik'
import 'react-datepicker/dist/react-datepicker.css'
import { PlusCircle, ChevronDown, Calendar } from 'react-feather'
import { InputGroup, InputGroupAddon, Input, Button, FormGroup, Label } from 'reactstrap'
import DatePicker, { registerLocale } from 'react-datepicker'
import { es } from 'date-fns/locale'
import Select, { defaultTheme } from 'react-select'
import { formatRut, validateRut } from '@fdograph/rut-utilities'
import SignatureCanvas from 'react-signature-canvas'
import CardImg from 'reactstrap/lib/CardImg'
import moment from 'moment'
import { singleDateFormatter, filterParams } from '../../../utility/helpers/functions'

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

const SelectFieldFilter = (props) => {
  const {
    options, field, form, multiple, disabled, search, filter, filterEmployees, filterWorkstations,
  } = props
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState()
  //const [state, setState] = useState({ isOpen: false, value: undefined })
  const { name, value } = field
  const { colors } = defaultTheme
  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const onSelectChange = (option) => {
    form.setFieldValue(name, option.value)
    toggleOpen()
    setValues(option.label)
    if (search || filterEmployees || filterWorkstations) {
      if (option.value === '_all_') {
        search('')
      } else {
        search(
          filterParams(form.values, { name, value: option.value }),
          form.values,
        )
        if (filterEmployees) {
          filterEmployees(`?${name}=${option.value}`)
        }
        if (filterWorkstations) {
          filterWorkstations(`?${name}=${option.value}`)
        }
      }
    }
  }
  const selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, margin: 8 }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)' }),
  }

  const Menu = (props) => {
    const shadow = 'hsla(218, 50%, 10%, 0.1)';
    return (
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: `0 0 0 1px ${shadow}, 0 4px 11px ${shadow}`,
          marginTop: 8,
          position: 'absolute',
          zIndex: 1,
        }}
        {...props}
      />
    );
  };
  const Dropdown = ({ children, isOpen, target, onClose }) => (
    <div style={{ position: 'realtive' }}>
      {target}
      {isOpen ? <Menu>{children}</Menu> : null}
      {isOpen ? <Blanket onClick={onClose} /> : null}
    </div>
  );
  const Blanket = props => (
    <div
      css={{
        bottom: 0,
        left: 0,
        top: 0,
        right: 0,
        position: 'fixed',
        zIndex: 1,
      }}
      {...props}
    />
  );
  const Svg = p => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      role="presentation"
      {...p}
    />
  );
  const DropdownIndicator = () => (
    <div css={{ color: colors.neutral20, height: 24, width: 32 }}>
      <Svg>
        <path
          d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"
          fill="currentColor"
          fillRule="evenodd"
        />
      </Svg>
    </div>
  );
  const ChevronDown = () => (
    <Svg style={{ marginRight: -6 }}>
      <path
        d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </Svg>
  );
  return (
    <>
      <div className="d-flex w-100">
        <div onClick={() => toggleOpen()} className="d-flex w-100 justify-content-between align-items-center">
          <h6 className="cursor-pointer" style={{ fontSize: '12px' }}>{values || value}</h6>
          <ChevronDown
            onClick={() => setIsOpen(!isOpen)}
            size={15}
            className="primary font-weight-bold"
          />
        </div>

      </div>
      <Dropdown
        isOpen={isOpen}
        onClose={() => toggleOpen()}
      >
        <Select
          autoFocus
          backspaceRemovesValue={false}
          components={{ DropdownIndicator, IndicatorSeparator: null }}
          controlShouldRenderValue={false}
          hideSelectedOptions={false}
          isClearable={false}
          styles={selectStyles}
          tabSelectsValue={false}
          name={name}
          options={options}
          onChange={(option) => onSelectChange(option)}
          defaultValue={options.find((option) => (option.value === value) || (option.label === value))}
          isSearchable
          placeholder=""
          isMulti={!!multiple}
          isDisabled={disabled}
          menuIsOpen
        />
      </Dropdown>
    </>
  )
}

export const CustomSelect = (props) => {
  const {
    name, title, options, small, multiple, disabled, style,
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
        style={style}
      />
    </>
  )
}

export const CustomSelectFilter = (props) => {
  const {
    name, title, options, small, multiple, disabled, style, search, filter, filterEmployees, filterWorkstations,
  } = props
  return (
    <>
      <h1 htmlFor={name} className="primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>{`${title} ${small || ''}`}</h1>
      <Field
        options={options}
        name={name}
        component={SelectFieldFilter}
        multiple={multiple}
        disabled={disabled}
        style={style}
        search={search}
        filter={filter}
        filterEmployees={filterEmployees}
        filterWorkstations={filterWorkstations}
      />
    </>
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
  const { name, title, type, small } = props
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

const DatePickerFilteringField = (props) => {
  const { title, form, field } = props
  const { name, value } = field
  const todayInitial = moment(new Date(), 'YYYY-MM-DD').toDate()
  const todayEnd = new Date()

  const [localDate, setLocalDate] = useState()

  const handleDate = (pickerDate) => {
    const mDate = moment(pickerDate, 'DD-MM-YYYY').toDate()
    const nDate = moment(mDate).format('DD-MM-YYYY')
    setLocalDate(singleDateFormatter(mDate, 'DD-MM-YYYY'))
    form.setFieldValue(name, '29/03/2019')
  }
  const DateCustomInput = ({ onClick }) => (
    <div className="d-flex w-100 justify-content-between">
      <h4 className="cursor-pointer" onClick={onClick} style={{ fontSize: '12px', fontWeight: 'bold' }}>
        {singleDateFormatter(value, 'DD-MM-YYYY')}
      </h4>
      <ChevronDown onClick={onClick} className="ml-1" size={20} />
    </div>
  )
  return (
    <div className="d-flex flex-row">
      <div className="d-flex justify-content-center align-items-center p-1">
        <Calendar size={25} className="primary" />
      </div>
      <div className="d-flex flex-column w-100">
        <div className="w-100">
          <h4 className="primary" style={{ fontSize: '15px', fontWeight: 'bold' }}>{title}</h4>
        </div>
        <div className="d-flex flex-row w-100">
          <DatePicker
            locale="es"
            name={name}
            dateFormat="dd/MM/yyyy"
            className="form-control"
            selected={value}
            autoComplete="off"
            onChange={(date) => {
              form.setFieldValue(name, moment(date, 'YYYY-MM-DD').toDate())
            }}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            customInput={<DateCustomInput />}
          />
        </div>
      </div>
    </div>
  )
}

export const CustomDatePickerFilter = (props) => {
  const {
    name, title,
  } = props
  return (
    <>
      <Field
        name={name}
        component={DatePickerFilteringField}
        autoComplete="off"
        title={title}
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
              onChange={() => { setDisabled(!isDisabled); form.setFieldValue(name, '') }}
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
        value
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
            <FormGroup key={risk.id} check className="col-lg-3 my-1">
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