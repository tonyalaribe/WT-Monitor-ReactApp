/*
 *
 * UserScreenshots actions
 *
 */

import {
  GET_SCREENSHOTS,
  RECEIVED_SCREENSHOTS,
} from './constants';

export function getScreenshots(userID) {
  return {
    type: GET_SCREENSHOTS,
    payload: userID
  };

}
export function receivedScreenshots(payload){
  return {
    type: RECEIVED_SCREENSHOTS,
    payload: payload,
  };
}
