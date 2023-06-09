import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetFriendStatsQuery } from '../app/services/friendStatsApi';

function FriendStats () {

  const userId = useSelector(state => state.user.id)

  const { data: friendStats } = useGetFriendStatsQuery(userId);

  if(friendStats == null) {
    return (
      <div>
      <h2>NO STATS</h2>
  
      <Link to='/friendslist/myfriends'><button>Back to Friends List</button></Link>
    </div>
    )
  } else {
    return (
      <div>
      <h2>{friendStats.username}'s STATS</h2>
  
      <h3>Total Games: {friendStats.overall_stat.total_games}</h3>
      <h3>Total Pinfall: {friendStats.overall_stat.total_pinfall}</h3>
      <h3>All-time Average: {friendStats.overall_stat.average}</h3>
      <h3>All-time High Score: {friendStats.overall_stat.high_score}</h3>
      <h3>All-time Low Score: {friendStats.overall_stat.low_score}</h3>
      <h3>Total Strikes: {friendStats.overall_stat.total_strikes}</h3>
      <h3>Total Spares: {friendStats.overall_stat.total_spares}</h3>
      <h3>Total Open Frames: {friendStats.overall_stat.total_open_frames}</h3>
      <Link to='/friendslist/myfriends'><button>Back to Friends List</button></Link>
    </div>
    )
  }
  
}

export default FriendStats;