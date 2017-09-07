import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Scores extends Component {
  componentDidMount() {
    this.props.fetchScores();
  }
  render() {
    return (
      <div>
        {this.props.isFetchingScores ? (
          <div>Fetching scores</div>
        ) : this.props.scores.length >= 1 ? (
          this.props.scores.map((val, index) => (
            <Paper className="pa3 mb3" key={index}>
              <div className="mb2">
                <strong>Email:</strong> {val.email}
              </div>
              <div>
                <strong>Score:</strong> {val.score}
              </div>
            </Paper>
          ))
        ) : (
          <div>No scores found</div>
        )}
      </div>
    );
  }
}

export default Scores;
