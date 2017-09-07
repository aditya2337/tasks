import actionTypes from './actionTypes';
import config from '../../../config/config';

const { REQUEST_SENDINVITE, RECEIVE_SENDINVITE } = actionTypes;

export const inviteStatus = (bool, email) => ({
  type: RECEIVE_SENDINVITE,
  inviteSent: bool,
  email
});

export function sendInvite(email) {
  return function(dispatch) {
    dispatch({ type: REQUEST_SENDINVITE });
    const payload = {
      email
    };
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json;charset=UTF-8');
    return fetch(`${config.URI}/send-mail`, {
      method: 'post',
      headers: myHeaders,
      body: JSON.stringify(payload)
    })
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.status && res.status === 'success') {
          dispatch(inviteStatus(true, email));
        } else if (res.error) {
          console.error(res.error);
        }
      })
      .catch(e => console.error(e));
  };
}
