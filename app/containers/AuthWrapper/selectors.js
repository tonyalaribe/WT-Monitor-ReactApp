import { createSelector } from 'reselect';

/**
 * Direct selector to the authWrapper state domain
 */
const selectAuthWrapperDomain = () => (state) => state.get('authWrapper');

/**
 * Other specific selectors
 */


/**
 * Default selector used by AuthWrapper
 */

const selectAuthWrapper = () => createSelector(
  selectAuthWrapperDomain(),
  (substate) => substate.toJS()
);

export default selectAuthWrapper;
export {
  selectAuthWrapperDomain,
};
