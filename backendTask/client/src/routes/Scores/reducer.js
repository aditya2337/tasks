import actionTypes from './actions/actionTypes';

const { REQUEST_SCORES, RECEIVE_SCORES } = actionTypes;

const scoreReducer = (
  state = {
    isFetchingScores: false,
    scores: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SCORES:
      return Object.assign({}, state, { isFetchingScores: true });
    case RECEIVE_SCORES:
      return Object.assign({}, state, {
        isFetchingScores: false,
        scores: action.scores
      });
    default:
      return state;
  }
};

export default scoreReducer;
