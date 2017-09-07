import { connect } from 'react-redux';

import * as actions from './actions';
import Interview from './Interview';

const mapStateToProps = (state, ownProps) => ({
  isFetchingUser: state.interview.isFetchingUser,
  isFetchingQuestions: state.interview.isFetchingQuestions,
  questions: state.interview.questions,
  onQuestion: state.interview.onQuestion,
  correctAnswers: state.interview.correctAnswers,
  user: state.interview.user,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  fetchQuestions: () => dispatch(actions.fetchQuestions()),
  nextQuestion: onQuestion => dispatch(actions.nextQuestion(onQuestion)),
  correctAnswer: correctAnswers =>
    dispatch(actions.correctAnswer(correctAnswers)),
  submitFinalScore: (email, score) =>
    dispatch(actions.submitFinalScore(email, score)),
  fetchUserData: token => dispatch(actions.fetchUserData(token))
});

const InterviewContainer = connect(mapStateToProps, mapDispatchToProps)(
  Interview
);

export default InterviewContainer;
