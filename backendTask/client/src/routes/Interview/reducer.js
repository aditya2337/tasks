import actionTypes from './actions/actionTypes';

const {
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  NEXT_QUESTION,
  CORRECT_ANSWER
} = actionTypes;

const loginReducer = (
  state = {
    isFetchingUser: false,
    isFetchingQuestions: false,
    questions: [],
    onQuestion: 1,
    correctAnswers: 0,
    user: {}
  },
  action
) => {
  switch (action.type) {
    case REQUEST_USERDATA:
      return Object.assign({}, state, { isFetchingUser: true });
    case RECEIVE_USERDATA:
      return Object.assign({}, state, {
        isFetchingUser: false,
        user: action.user
      });
    case REQUEST_QUESTIONS:
      return Object.assign({}, state, { isFetchingQuestions: true });
    case RECEIVE_QUESTIONS:
      return Object.assign({}, state, {
        isFetchingQuestions: false,
        questions: action.questions
      });
    case NEXT_QUESTION:
      return Object.assign({}, state, { onQuestion: action.onQuestion });
    case CORRECT_ANSWER:
      return Object.assign({}, state, {
        correctAnswers: action.correctAnswers
      });
    default:
      return state;
  }
};

export default loginReducer;
