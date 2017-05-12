import expect from 'expect';
import userScreenshotsReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userScreenshotsReducer', () => {
  it('returns the initial state', () => {
    expect(userScreenshotsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
