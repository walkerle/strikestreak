import React from 'react';

function MyStats({ overallStats }) {

  if(overallStats == null) {
    return (
      <div>
        <h2>OVERALL STATS:</h2>

        <h3>No Stats Recorded</h3>
      </div>
    )
  } else {
    return (
      <div>
      <h2>OVERALL STATS:</h2>

      <h3>Total Games: {overallStats.total_games}</h3>
      <h3>Total Pinfall: {overallStats.total_pinfall}</h3>
      <h3>All-time Average: {overallStats.average}</h3>
      <h3>All-time High Score: {overallStats.high_score}</h3>
      <h3>All-time Low Score: {overallStats.low_score}</h3>
      <h3>Total Strikes: {overallStats.total_strikes}</h3>
      <h3>Total Spares: {overallStats.total_spares}</h3>
      <h3>Total Open Frames: {overallStats.total_open_frames}</h3>
    </div>
    )
  }
}

export default MyStats;