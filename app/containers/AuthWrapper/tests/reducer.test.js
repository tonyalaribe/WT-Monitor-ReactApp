import expect from 'expect';
import authWrapperReducer from '../reducer';
import { fromJS } from 'immutable';

describe('authWrapperReducer', () => {
  it('returns the initial state', () => {
    expect(authWrapperReducer(undefined, {})).toEqual(fromJS({}));
  });
});
