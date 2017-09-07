import actionTypes from './actionTypes';
import config from '../../../config/config';

const { REQUEST_SCORES, RECEIVE_SCORES } = actionTypes;

export function fetchScores() {
  return function(dispatch) {
    dispatch({ type: REQUEST_SCORES });
    return fetch(`${config.URI}/scores`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.success) {
          dispatch({ type: RECEIVE_SCORES, scores: res.scores });
        } else if (res.error) {
          dispatch({ type: RECEIVE_SCORES, scores: [] });
          console.error(res.error);
        } else {
          dispatch({ type: RECEIVE_SCORES, scores: [] });
        }
      })
      .catch(e => console.error(e));
  };
}
