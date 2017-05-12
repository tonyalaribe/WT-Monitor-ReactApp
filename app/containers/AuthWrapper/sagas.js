//import { take, call, put, select } from 'redux-saga/effects';
import { call,put } from 'redux-saga/effects';
import { takeEvery} from 'redux-saga';
//import fetch from 'isomorphic-fetch';
import backend from 'utils/constant.js';

import {receiveUsers} from './actions';
import {
  GET_USERS
} from './constants';


function getUsers(payload){
  return fetch(backend()+'/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(
    function(resp){
      console.log(resp)
      return resp.json()
    },
    function(err){
      console.error(err)
      return err
    }
  );
}

function* getUsersSaga(action){

  try{
    const body = yield call(getUsers, action)
    console.log(body)
    yield put(receiveUsers(body));
  }catch(e){
    console.log(e)
  }
}

// Individual exports for testing
export function* defaultSaga() {

  return yield* takeEvery(GET_USERS, getUsersSaga);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
