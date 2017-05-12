/*
 *
 * UserTimeLog reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVED_TIMELOG,
} from './constants';

const initialState = fromJS({timelog:[]});

function userTimeLogReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_TIMELOG:
      console.log(action)
      if (action.payload && action.payload.constructor === Array){
        return state.set("timelog",action.payload);
      }
      return state;
    default:
      return state;
  }
}

export default userTimeLogReducer;
