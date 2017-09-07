import { connect } from 'react-redux';

import Interview from './Interview';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps
});

const InterviewContainer = connect(mapStateToProps)(Interview);

export default InterviewContainer;
