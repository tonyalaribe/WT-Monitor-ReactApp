/*
 *
 * AuthWrapper reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVED_USERS,
} from './constants';

const initialState = fromJS({users:[],});

function authWrapperReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_USERS:
      
      return state.set("users",action.payload);
    default:
      return state;
  }
}

export default authWrapperReducer;
