import React, { Component } from 'react';

export default class InviteForm extends Component {
  state = {
    email: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { email } = this.state;
    if (email) {
      this.props.sendInvite(email);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          type="email"
        />
      </form>
    );
  }
}
