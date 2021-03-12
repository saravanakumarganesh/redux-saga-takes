import { take, takeEvery, delay, put } from 'redux-saga/effects';

export function* onIncrement() {
  yield console.log('I am incremented');
  yield delay(5000);
  yield put({ type: 'INCREMENT_ON_SAGA' });
}

export function* incrementSaga() {
  yield takeEvery('INCREMENT', onIncrement);
}
