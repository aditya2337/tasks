import React from 'react';

import Qa from './Qa';

const Interview = props => (
  <div>
    <h4>Note: If Page refreshed the score will not be counted</h4>
    {props.questions.length >= 1 ? (
      props.questions.map(
        ({ question, number, answer, options }) =>
          number === props.onQuestion ? (
            <Qa
              fetchUserData={props.fetchUserData}
              submitFinalScore={props.submitFinalScore}
              email={props.user.email}
              token={props.user.token}
              correctAnswer={props.correctAnswer}
              correctAnswers={props.correctAnswers}
              key={number}
              question={question}
              number={number}
              answer={answer}
              options={options}
              nextQuestion={props.nextQuestion}
            />
          ) : (
            ''
          )
      )
    ) : (
      ''
    )}
  </div>
);

export default Interview;
