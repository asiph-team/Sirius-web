import mock from './mock'
import './_auth/authentication'
import './_actions/show'
import './_enterprises/show'
import './_jobs/show'
import './_workers/show'
import './_activities/show'
import './_trainings/show'
import './_programs/show'

mock.onAny().passThrough()