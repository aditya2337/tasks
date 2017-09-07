import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import InterviewQuestions from '../../components/Interview';

class Interview extends Component {
  componentDidMount() {
    if (this.props.location.state && this.props.location.state.valid) {
      this.props.fetchUserData(this.props.location.state.user.token);
      this.props.fetchQuestions();
    }
  }

  render() {
    return this.props.location.state && this.props.location.state.valid ? (
      <section className="flex items-center flex-column justify-center h-100 bg-washed-blue">
        {this.props.isFetchingUser ? (
          <div>Loading...</div>
        ) : (
          <div>
            {this.props.user.score && this.props.user.score >= 1 ? (
              <header className="tc ph5 lh-copy">
                <h3 className="f1 w-100 tc code mb3 fw9 dib tracked-tight green">
                  Your score is: {this.props.user.score}
                </h3>
              </header>
            ) : (
              <div>
                <InterviewQuestions {...this.props} />
              </div>
            )}
          </div>
        )}
      </section>
    ) : (
      <Redirect to="/unauthorized" />
    );
  }
}

export default Interview;
