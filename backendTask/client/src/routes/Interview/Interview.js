import React from 'react';
import { Redirect } from 'react-router-dom';

import InterviewQuestions from '../../components/Interview';

const Interview = props =>
  props.location.state && props.location.state.valid ? (
    <section className="flex items-center flex-column justify-center h-100 bg-washed-blue">
      {props.location.state.user.score &&
      props.location.state.user.score >= 1 ? (
        <header className="tc ph5 lh-copy">
          <h3 className="f1 w-100 tc code mb3 fw9 dib tracked-tight green">
            Your score is: {props.location.state.user.scor}
          </h3>
        </header>
      ) : (
        <div>
          <InterviewQuestions />
        </div>
      )}
    </section>
  ) : (
    <Redirect to="/unauthorized" />
  );

export default Interview;
