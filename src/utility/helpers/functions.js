import { LargeTextCellEditor } from 'ag-grid-community'
import moment from 'moment'
import { rules } from '../../configs/rules'

export function phoneFormat(phone) {
  return phone.replace('+569', '').replace(/\s/g, '')
}

export function phoneFormatTo8(phone) {
  return phone.slice(1)
}

export const formatDate = (list, dates, format) => {
  const newData = list.map((item) => {
    const keys = Object.keys(item)
    const obj = {}
    keys.forEach((key) => {
      // eslint-disable-next-line no-unused-expressions
      dates.includes(key) ? obj[[key]] = moment(item[[key]]).format(format) : obj[key] = item[key]
    })
    return obj
  })
  return newData
}

export const singleDateFormatter = (date, format) => moment(date).format(format)

export const rutFormatter = (value) => `${value.substr(0, value.length - 1)}-${value.substr(value.length - 1, value.length - 1)}`

export const priorityES = (list, data, header) => {
  const newData = list.map((item) => {
    const keys = Object.keys(item)
    const priority = Object.keys(data)
    const obj = {}
    keys.forEach((key) => {
      // eslint-disable-next-line no-unused-expressions
      header.includes(key) ? (
        priority.forEach((p) => {
          if (item[key] === data[p].value) { obj[key] = data[p].label }
        })
      ) : obj[key] = item[key]

    })
    return obj
  })
  return newData
}
export const formData = (values) => {
  const keys = Object.keys(values)
  const data = new FormData()
  keys.forEach((key) => data.append(key, values[[key]]))
  return data
}

export const permitted = (rule) => {
  const { user: { role } } = JSON.parse(localStorage.getItem('user'))
  return rules[role].includes(rule)
}

export const userData = () => {
  if (localStorage.getItem('user')) {
    const { user } = JSON.parse(localStorage.getItem('user'))
    return user
  }
}

export const capitalizeFirstLetter = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase()
}

export const percent = (done, total) => (total > 0 ? `${Math.ceil((done / total) * 100).toFixed(0)}%` : '--')

export const setDomain = (domain) => {
  const parts = domain.split('.')
  localStorage.setItem('sub', JSON.stringify(parts[0] === 'app' ? '' : `${parts[0]}.`))
}
export const getSubdomain = () => {
  if (localStorage.getItem('sub')) return JSON.parse(localStorage.getItem('sub'))
  return false
}
export const client = () => {
  const parts = window.location.hostname.split('.')
  return parts[0] === 'app' ? '' : `${parts[0]}.`
}

export const filterParams = (filter, newObj) => {
  const fields = {
    date_start: null,
    date_end: null,
    area_id: null,
    workstation_id: null,
    employed_id: null,
  }
  const keysFilter = Object.keys(filter)
  keysFilter.forEach((key) => {
    fields[key] = filter[key]
  })
  let url = `?date_start=${moment(filter.date_start).format('YYYY-MM-DD')}&date_end=${moment(filter.date_end).format('YYYY-MM-DD')}`
  const keys = Object.keys(filter)
  keys.forEach((key) => {
    if (key !== 'date_start' && key !== 'date_end') {
      if (filter[key] !== 'Todas' && filter[key] !== 'Todos') {
        url += `&${key}=${filter[key]}`
      }
    }
  })
  return url
}
