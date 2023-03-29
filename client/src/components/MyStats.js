import React from 'react';
import { useAutoLoginQuery } from '../app/services/userApi';

function MyStats() {

  const { data: user } = useAutoLoginQuery();
  // console.log(user.overall_stat.id)

  if(user.overall_stat == null) {
    return (
      <div>
        <h2>MY OVERALL STATS</h2>

        <h3>No Stats Recorded</h3>
      </div>
    )
  } else {
    return (
      <div>
      <h2>MY OVERALL STATS</h2>

      <h3>Total Games: {user.overall_stat.total_games}</h3>
      <h3>Total Pinfall: {user.overall_stat.total_pinfall}</h3>
      <h3>All-time Average: {user.overall_stat.average}</h3>
      <h3>All-time High Score: {user.overall_stat.high_score}</h3>
      <h3>All-time Low Score: {user.overall_stat.low_score}</h3>
      <h3>Total Strikes: {user.overall_stat.total_strikes}</h3>
      <h3>Total Spares: {user.overall_stat.total_spares}</h3>
      <h3>Total Open Frames: {user.overall_stat.total_open_frames}</h3>
    </div>
    )
  }
}

export default MyStats;