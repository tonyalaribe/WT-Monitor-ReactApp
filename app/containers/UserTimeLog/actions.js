/*
 *
 * UserTimeLog actions
 *
 */

import {
  GET_TIMELOG,
  RECEIVED_TIMELOG
} from './constants';

export function getTimelog(url) {
  console.log(url)
  return {
    type: GET_TIMELOG,
    payload: url,
  };
}

export function receivedTimelog(payload) {
  return {
    type: RECEIVED_TIMELOG,
    payload: payload,
  };
}
