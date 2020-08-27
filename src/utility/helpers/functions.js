export function phoneFormat(phone) {
  return phone.replace('+569 ', '').replace(/\s/g, '')
}
