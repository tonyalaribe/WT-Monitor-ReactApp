/*
 *
 * UserScreenshots reducer
 *
 */

import { fromJS } from 'immutable';
import {
  RECEIVED_SCREENSHOTS
} from './constants';

const initialState = fromJS({screenshots:[]});

function userScreenshotsReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_SCREENSHOTS:
      return state.set("screenshots",action.payload);
    default:
      return state;
  }
}

export default userScreenshotsReducer;
