import { connect } from 'react-redux';

import * as actions from './actions';
import Admin from './Admin';

const mapStateToProps = (state, ownProps) => ({
  isSendingInvite: state.admin.isSendingInvite,
  inviteSent: state.admin.inviteSent,
  email: state.admin.email,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  sendInvite: email => dispatch(actions.sendInvite(email)),
  inviteStatus: (bool, email) => dispatch(actions.inviteStatus(bool, email))
});

const AdminContainer = connect(mapStateToProps, mapDispatchToProps)(Admin);

export default AdminContainer;
