import { createSelector } from 'reselect';

/**
 * Direct selector to the userContainer state domain
 */
const selectUserContainerDomain = () => (state) => state.get('userContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserContainer
 */

const selectUserContainer = () => createSelector(
  selectUserContainerDomain(),
  (substate) => substate.toJS()
);

export default selectUserContainer;
export {
  selectUserContainerDomain,
};
