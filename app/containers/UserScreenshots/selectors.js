import { createSelector } from 'reselect';

/**
 * Direct selector to the userScreenshots state domain
 */
const selectUserScreenshotsDomain = () => (state) => state.get('userScreenshots');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserScreenshots
 */

const selectUserScreenshots = () => createSelector(
  selectUserScreenshotsDomain(),
  (substate) => substate.toJS()
);

export default selectUserScreenshots;
export {
  selectUserScreenshotsDomain,
};
