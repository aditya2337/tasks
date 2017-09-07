import React, { Component } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

export default class Qa extends Component {
  state = {
    selected: 'D'
  };

  handleNext = () => {
    const {
      correctAnswer,
      correctAnswers,
      answer,
      nextQuestion,
      number
    } = this.props;
    if (this.state.selected === answer) {
      correctAnswer(correctAnswers + 1);
    }
    nextQuestion(number + 1);
  };

  handleSubmit = () => {
    const {
      correctAnswers,
      email,
      submitFinalScore,
      fetchUserData,
      token
    } = this.props;
    submitFinalScore(email, correctAnswers).then(res => {
      if (res.success) {
        console.log(res);
        fetchUserData(token);
      } else {
        console.error('some');
      }
    });
  };

  render() {
    const { question, number, answer, options } = this.props;

    return (
      <div key={number}>
        <div className="mb3">
          <strong>
            Q {number}: {question}
          </strong>
        </div>
        <RadioButtonGroup
          onChange={(e, selected) =>
            this.setState({
              selected
            })}
          name="shipSpeed"
          valueSelected={this.state.selected}>
          {Object.keys(options).map((val, index) => (
            <RadioButton
              className="mb1"
              key={index}
              value={val}
              label={options[val]}
            />
          ))}
        </RadioButtonGroup>
        {number === 5 ? (
          <button onClick={this.handleSubmit} className="fr">
            Submit
          </button>
        ) : (
          <button onClick={this.handleNext} className="fr">
            Next
          </button>
        )}
      </div>
    );
  }
}
