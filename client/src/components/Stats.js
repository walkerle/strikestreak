import React from 'react';
// import { useAutoLoginQuery } from '../app/services/userApi';

function Stats({stats}) {

  // Redux method
  // const { data: user=[] } = useAutoLoginQuery();

  if(stats == null) {
    return (
      <div>
        <h2>MY STATS</h2>

        <h3>No Stats Recorded</h3>
      </div>
    )
  } else {
    return (
      <div>
        <br/>
        <div className='Headers'>
          <h2>MY STATS</h2>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>Total Games: {stats.total_games}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>Total Pinfall: {stats.total_pinfall}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>All-time Average: {stats.average}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>All-time High Score: {stats.high_score}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>All-time Low Score: {stats.low_score}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>Total Strikes: {stats.total_strikes}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>Total Spares: {stats.total_spares}</h3>
        </div>
        <br/>
        <div className='myStatsContainer'>
          <h3>Total Open Frames: {stats.total_open_frames}</h3>
        </div>
        <br/>
      </div>
    )
  }
}

export default Stats;