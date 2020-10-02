import moment from 'moment'

export function phoneFormat(phone) {
  return phone.replace('+569 ', '').replace(/\s/g, '')
}

export const formatDate = (list, dates, format) => {
  const newData = list.map((item) => {
    const keys = Object.keys(item)
    const obj = {}
    keys.forEach((key) => {
      dates.includes(key) ? obj[[key]] = moment(item[[key]]).format(format) : obj[key] = item[key]
    })
    return obj
  })
  return newData
}

export const singleDateFormatter = (date, format) => moment(date).format(format)
