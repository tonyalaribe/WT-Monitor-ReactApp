import expect from 'expect';
import userContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('userContainerReducer', () => {
  it('returns the initial state', () => {
    expect(userContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
