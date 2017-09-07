import actionTypes from './actions/actionTypes';

const { REQUEST_OAUTH, RECEIVE_OAUTH } = actionTypes;

const loginReducer = (
  state = {
    isLoggingIn: false,
    user: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_OAUTH:
      return Object.assign({}, state, { isLoggingIn: true });
    case RECEIVE_OAUTH:
      return Object.assign({}, state, {
        isLoggingIn: false,
        user: action.user
      });
    default:
      return state;
  }
};

export default loginReducer;
