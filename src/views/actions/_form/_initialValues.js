export const initialValues = {
  name: '',
  date_initial: '',
  date_committed: '',
  origin: '',
  priority: '',
  manager_id: '',
}

export const origins = [
  { value: 'CHPS', label: 'CHPS' },
  { value: 'OAL', label: 'OAL' },
  { value: 'SS', label: 'SS' },
  { value: 'IDT', label: 'IDT' },
  { value: 'Auditoría interna', label: 'Auditoría interna' },
  { value: 'Auditoría externa', label: 'Auditoría externa' },
  { value: 'Incidente', label: 'Incidente' },
  { value: 'Observación actividad', label: 'Observación actividad' },
]

export const priorities = [
  { value: 'high', label: 'Alta' },
  { value: 'media', label: 'Media' },
  { value: 'low', label: 'Baja' },
]
