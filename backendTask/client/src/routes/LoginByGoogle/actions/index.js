import actionTypes from './actionTypes';
import config from '../../../config/config';

const { REQUEST_OAUTH, RECEIVE_OAUTH } = actionTypes;

export const inviteStatus = (bool, email) => ({
  type: RECEIVE_OAUTH
});

export function checkValidityOfToken(token) {
  return function(dispatch) {
    dispatch({ type: REQUEST_OAUTH });
    return fetch(`${config.URI}/check-validity?token=${token}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.success) {
          dispatch({ type: RECEIVE_OAUTH, user: res.user });
        } else if (res.error) {
          dispatch({ type: RECEIVE_OAUTH, user: {} });
          console.error(res.error);
        } else {
          dispatch({ type: RECEIVE_OAUTH, user: {} });
        }
      })
      .catch(e => console.error(e));
  };
}
