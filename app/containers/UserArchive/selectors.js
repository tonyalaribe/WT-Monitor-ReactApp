import { createSelector } from 'reselect';

/**
 * Direct selector to the userArchive state domain
 */
const selectUserArchiveDomain = () => (state) => state.get('userArchive');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserArchive
 */

const selectUserArchive = () => createSelector(
  selectUserArchiveDomain(),
  (substate) => substate.toJS()
);

export default selectUserArchive;
export {
  selectUserArchiveDomain,
};
