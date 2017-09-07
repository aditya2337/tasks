import actionTypes from './actions/actionTypes';

const { REQUEST_SENDINVITE, RECEIVE_SENDINVITE } = actionTypes;

const interviewReducer = (
  state = {
    isSendingInvite: false,
    inviteSent: false,
    email: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SENDINVITE:
      return Object.assign({}, state, {
        isSendingInvite: true
      });
    case RECEIVE_SENDINVITE:
      return Object.assign({}, state, {
        isSendingInvite: false,
        inviteSent: action.inviteSent,
        email: action.email
      });
    default:
      return state;
  }
};

export default interviewReducer;
