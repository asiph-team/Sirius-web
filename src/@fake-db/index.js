import mock from './mock'
import './_auth/authentication'
import './_actions/show'
import './_enterprises'
import './_jobs'
import './_employees'
import './_activities'
import './_trainings/show'
import './_programs/show'
import './_areas'

mock.onAny().passThrough()
