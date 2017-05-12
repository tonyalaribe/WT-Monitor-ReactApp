import expect from 'expect';
import userArchiveReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userArchiveReducer', () => {
  it('returns the initial state', () => {
    expect(userArchiveReducer(undefined, {})).toEqual(fromJS({}));
  });
});
