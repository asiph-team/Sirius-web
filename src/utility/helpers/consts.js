export const cellRegExp = /^[0-9]{8}$/
export const phoneRegExp = /^[0-9]{9,11}$/
export const urlApi = 'http://104.40.54.96'
export const profiles = { superadministrator: 'Super Administrador', administrator: 'Administrador', chief_of_area: 'Jefe de Area' }
export const updatePasswordUrl = { superadministrator: 'admin/password', administrator: 'users/password', chief_of_area: 'users/password', employees: 'users/password' }
export const baseApiUrl = '/api/v1/'
export const semaphore = { high: 'danger', media: 'warning', middle: 'warning', low: 'success' }
export const semaphoreFields = ['priority', 'risk']
