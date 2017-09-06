import actionTypes from './actionTypes';
import config from '../../../config/config';

const { REQUEST_PICTURES, RECEIVE_PICTURES, SERVER_ERROR } = actionTypes;

const hasErrored = bool => ({
  type: SERVER_ERROR,
  hasErrored: bool
});

export function fetchPanaromicImages() {
  return function(dispatch) {
    dispatch({ type: REQUEST_PICTURES });
    return fetch(`${config.URI}/getPanos`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(pics => dispatch({ type: RECEIVE_PICTURES, galleryImages: pics }))
      .catch(() => dispatch(hasErrored(true)));
  };
}
