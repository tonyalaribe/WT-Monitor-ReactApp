// import { take, call, put, select } from 'redux-saga/effects';
import { call,put } from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
//import fetch from 'isomorphic-fetch';
import backend from 'utils/constant.js';
import {GET_TIMELOG} from './constants';
import {receivedTimelog} from './actions';

function getTimelogAPI(action){
  return fetch(backend()+'/api/timelog?id='+action.payload, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(
    function(resp){
      return resp.json()
    },
    function(err){
      console.error(err)
      return err
    }
  );
}


function* getTimelogSaga(action){
  try{
    const body = yield call(getTimelogAPI, action)
    console.log(body)
    if (body != null ){
      yield put(receivedTimelog(body));
    }else{
      console.log("empty  timelog")
      //yield put(receivedScreenshots([]));
    }
  }catch(e){
    console.log(e)
  }
}


// Individual exports for testing
export function* defaultSaga() {
  return yield* takeLatest(GET_TIMELOG, getTimelogSaga);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
