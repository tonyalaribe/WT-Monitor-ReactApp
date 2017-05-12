// import { take, call, put, select } from 'redux-saga/effects';
import { call,put } from 'redux-saga/effects';
import { takeLatest} from 'redux-saga';
//import fetch from 'isomorphic-fetch';
import backend from 'utils/constant.js';
import {GET_SCREENSHOTS} from './constants';
import {receivedScreenshots} from './actions';

function getScreenshots(action){
  return fetch(backend()+'/api/screenshots?id='+action.payload, {
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

function* getScreenshotsSaga(action){
  try{
    const body = yield call(getScreenshots, action)
    //console.log(body)
    if (body != null ){
      yield put(receivedScreenshots(body));
    }else{
      //console.log("empty screenshots")
      yield put(receivedScreenshots([]));
    }
  }catch(e){
    console.log(e)
  }
}

// Individual exports for testing
export function* defaultSaga() {
  return yield* takeLatest(GET_SCREENSHOTS, getScreenshotsSaga);
}

// All sagas to be loaded
export default [
  defaultSaga,
];
