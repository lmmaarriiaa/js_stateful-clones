'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const result = [];
  let stateClone = { ...state };

  for (const action of actions) {
    if (action.type === 'addProperties') {
      for (const key in action.extraData) {
        stateClone[key] = action.extraData[key];
      }
    }

    if (action.type === 'removeProperties') {
      for (const keyToRemove of action.keysToRemove) {
        delete stateClone[keyToRemove];
      }
    }

    if (action.type === 'clear') {
      stateClone = {};
    }

    result.push({ ...stateClone });
  }

  return result;
}

module.exports = transformStateWithClones;
