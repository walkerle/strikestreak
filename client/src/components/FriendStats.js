import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useGetFriendStatsQuery } from '../app/services/friendStatsApi';

function FriendStats({friend, friendStats}) {
  // Redux methods
  // const userId = useSelector(state => state.user.id)
  // const { data: friendStats } = useGetFriendStatsQuery(userId);

  // fetch(`/users/${friend.id}`)
  // .then(res => res.json()).then(data => console.log(data))
  // .then(res => {
  //   if(res.ok) {
  //     res.json().then(data => console.log(data))
  //   } else {
  //     res.json().then(errors => console.log(errors))
  //   }
  // })

  return (
    <div>
      <div className='Headers'>
        <h2>{friend.username}'s STATS</h2>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>Total Games: {friendStats.total_games}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>Total Pinfall: {friendStats.total_pinfall}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>All-time Average: {friendStats.average}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>All-time High Score: {friendStats.high_score}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>All-time Low Score: {friendStats.low_score}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>Total Strikes: {friendStats.total_strikes}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>Total Spares: {friendStats.total_spares}</h3>
      </div>
      <br/>
      <div className='myStatsContainer'>
        <h3>Total Open Frames: {friendStats.total_open_frames}</h3>
      </div>
      <br/>
    </div>
  )
}

export default FriendStats;