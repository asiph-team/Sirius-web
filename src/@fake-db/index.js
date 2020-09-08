import mock from './mock'
import './_auth/authentication'
import './_actions'
import './_enterprises'
import './_workstations'
import './_employees'
import './_activities'
import './_trainings'
import './_programs/show'
import './_areas'
import './_dashboard/admin'

mock.onAny().passThrough()
