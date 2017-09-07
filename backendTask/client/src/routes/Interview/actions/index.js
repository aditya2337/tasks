import actionTypes from './actionTypes';
import config from '../../../config/config';

const {
  REQUEST_USERDATA,
  RECEIVE_USERDATA,
  REQUEST_QUESTIONS,
  RECEIVE_QUESTIONS,
  NEXT_QUESTION,
  CORRECT_ANSWER
} = actionTypes;

export const inviteStatus = (bool, email) => ({
  type: RECEIVE_QUESTIONS
});

export const nextQuestion = onQuestion => ({
  type: NEXT_QUESTION,
  onQuestion
});

export const correctAnswer = correctAnswers => ({
  type: CORRECT_ANSWER,
  correctAnswers
});

export function submitFinalScore(email, score) {
  return function(dispatch) {
    const payload = { email, score };
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json;charset=UTF-8');
    return fetch(`${config.URI}/submit`, {
      method: 'put',
      headers: myHeaders,
      body: JSON.stringify(payload)
    }).then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      } else {
        return res.json();
      }
    });
  };
}

export function fetchQuestions() {
  return function(dispatch) {
    dispatch({ type: REQUEST_QUESTIONS });
    return fetch(`${config.URI}/questions`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.success) {
          dispatch({ type: RECEIVE_QUESTIONS, questions: res.questions });
        } else if (res.error) {
          dispatch({ type: RECEIVE_QUESTIONS, questions: [] });
          console.error(res.error);
        } else {
          dispatch({ type: RECEIVE_QUESTIONS, questions: [] });
        }
      })
      .catch(e => console.error(e));
  };
}

export function fetchUserData(token) {
  return function(dispatch) {
    dispatch({ type: REQUEST_USERDATA });
    return fetch(`${config.URI}/check-validity?token=${token}`)
      .then(res => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          return res.json();
        }
      })
      .then(res => {
        if (res.success) {
          dispatch({ type: RECEIVE_USERDATA, user: res.user });
        } else if (res.error) {
          dispatch({ type: RECEIVE_USERDATA, user: {} });
          console.error(res.error);
        } else {
          dispatch({ type: RECEIVE_USERDATA, user: {} });
        }
      })
      .catch(e => console.error(e));
  };
}
