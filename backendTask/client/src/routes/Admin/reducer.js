import actionTypes from './actions/actionTypes';

const { REQUEST_SENDINVITE, RECEIVE_SENDINVITE, INVITE_ERROR } = actionTypes;

const interviewReducer = (
  state = {
    isSendingInvite: false,
    inviteSent: false,
    email: null,
    mailError: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SENDINVITE:
      return Object.assign({}, state, { isSendingInvite: true });
    case RECEIVE_SENDINVITE:
      return Object.assign({}, state, {
        isSendingInvite: false,
        inviteSent: action.inviteSent,
        email: action.email
      });
    case INVITE_ERROR:
      return Object.assign({}, state, {
        mailError: action.mailError
      });
    default:
      return state;
  }
};

export default interviewReducer;
