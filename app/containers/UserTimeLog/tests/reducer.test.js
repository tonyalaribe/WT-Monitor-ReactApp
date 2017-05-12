import expect from 'expect';
import userTimeLogReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userTimeLogReducer', () => {
  it('returns the initial state', () => {
    expect(userTimeLogReducer(undefined, {})).toEqual(fromJS({}));
  });
});
