import { createSelector } from 'reselect';

/**
 * Direct selector to the userTimeLog state domain
 */
const selectUserTimeLogDomain = () => (state) => state.get('userTimeLog');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserTimeLog
 */

const selectUserTimeLog = () => createSelector(
  selectUserTimeLogDomain(),
  (substate) => substate.toJS()
);

export default selectUserTimeLog;
export {
  selectUserTimeLogDomain,
};
