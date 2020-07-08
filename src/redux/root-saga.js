import { all } from 'redux-saga/effects';
import authSagas from '@sirius/redux/auth/saga';

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
  ]);
}
