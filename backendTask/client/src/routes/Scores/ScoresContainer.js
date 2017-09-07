import { connect } from 'react-redux';

import * as actions from './actions';
import Scores from './Scores';

const mapStateToProps = (state, ownProps) => ({
  isFetchingScores: state.scores.isLoggingIn,
  scores: state.scores.scores,
  ...ownProps
});

const mapDispatchToProps = dispatch => ({
  fetchScores: () => dispatch(actions.fetchScores())
});

const ScoresContainer = connect(mapStateToProps, mapDispatchToProps)(Scores);

export default ScoresContainer;
