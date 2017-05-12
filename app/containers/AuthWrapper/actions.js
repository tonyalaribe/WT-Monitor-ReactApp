/*
 *
 * AuthWrapper actions
 *
 */

import {
  GET_USERS,
  RECEIVED_USERS
} from './constants';

export function getUsers() {
  return {
    type: GET_USERS,
  };
}

export function receiveUsers(payload) {
  return {
    type: RECEIVED_USERS,
    payload:payload,
  };
}
