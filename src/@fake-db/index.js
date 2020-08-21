import mock from './mock'
import './_auth/authentication'
import './_actions/show'
import './_enterprises'
import './_jobs/show'
import './_workers'
import './_activities/show'
import './_trainings/show'
import './_programs/show'
import './_areas'

mock.onAny().passThrough()
