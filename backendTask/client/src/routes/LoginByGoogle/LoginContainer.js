import { connect } from 'react-redux';

import * as actions from './actions';
import LoginByGoogle from './LoginByGoogle';

const mapStateToProps = (state, ownProps) => ({
  isLoggingIn: state.login.isLoggingIn,
  user: state.login.user,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  checkValidityOfToken: token => dispatch(actions.checkValidityOfToken(token))
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(
  LoginByGoogle
);

export default LoginContainer;
