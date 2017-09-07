import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';

class LoginByGoogle extends Component {
  componentDidMount() {
    this.props.checkValidityOfToken(this.props.match.params.token);
  }

  render() {
    return (
      <div className="flex justify-center items-center h-100">
        <Paper
          className="flex justify-center items-center"
          style={{ height: '50vh', width: '50vw', backgroundColor: '#e3e3e3' }}>
          {this.props.isLoggingIn ? (
            <div>Loading...</div>
          ) : Object.keys(this.props.user).length >= 1 ? (
            <Redirect
              to={{
                pathname: '/interview',
                state: { valid: true, user: this.props.user }
              }}
            />
          ) : (
            <button>
              <a
                href={`http://localhost:3000/auth/google?token=${this.props
                  .match.params.token}`}>
                Login
              </a>
            </button>
          )}
        </Paper>
      </div>
    );
  }
}

export default LoginByGoogle;
