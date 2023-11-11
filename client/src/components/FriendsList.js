import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useGetMyFriendsQuery } from '../app/services/friendsApi';
// import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList({joinFriends, onGoToFriendStats, onDeleteFriend}) {
  
  // React state(s)
  const [users, setUsers] = useState([]);
  const [sort, setSort] = useState('average');
  const [sortOrder, setSortOrder] = useState(false)
  
  // Redux methods
  // const { data: user=null } = useAutoLoginQuery();
  // const { data: joinFriends=[] } = useGetMyFriendsQuery(user.id);
  // const { data: allUsers=[] } = useGetAllUsersQuery();
  
  // Fetch all users data
  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  // Event Handler: On clicking column
  const handleSort = (e) => {
    // console.log(e.target.textContent.toLowerCase().replace(' ', '_'));
    // Note: Time complexity for '.toLowerCase().replace' is O(n^2); switch case has more lines of code, but is more efficient, only evaluates 3 conditional cases

    (e.target.textContent.includes('↓') || e.target.textContent.includes('↑') ? setSortOrder(!sortOrder) : setSortOrder(false));
    switch(e.target.textContent) {
      case 'Total Games':
        setSort(() => 'total_games');
        break;
      case 'Total Pinfall':
        setSort(() => 'total_pinfall');
        break;
      case 'Average':
        setSort(() => 'average');
        break;
      case 'High Score':
        setSort(() => 'high_score');
        break;
      case 'Low Score':
        setSort(() => 'low_score');
        break;
      default:
        // no action
    }
  }
    
    // Save self and friends IDs to array
    let leaderboardIds = [];
    if(joinFriends.length > 0) {
      leaderboardIds = [joinFriends[0].friender_id, ...joinFriends.map(joinFriend => joinFriend.friendee_id)]
    }
    // if(joinFriends.length > 0) { // Alternate? O(n) - in progress, change leaderboardIds to object to improve time complexity?
    //   leaderboardIds[joinFriends[0].friender_id] = 1; // Adds current user id to leaderboardIds an an object key
    //   for(let element of joinFriends) if(!leaderboardIds[element]) leaderboardIds[element] = 1; // Adds each friend id  to leaderboardIds as an object key
    // }
    // console.log('leaderboardIds', leaderboardIds);
    
    // Create array of objects for self and friends stats
  // '.filter.includes': Time complexity appears to be O(n^2)
  // Refactored to improve time complexity: O(n^2) => O(n)
  const leaderboardStats = users.filter(user => leaderboardIds.includes(user.id))
  // const leaderboardStats = users.filter(user => (user.id in leaderboardIds)); // Alternate? O(n) => error on initial load, but works after fetched data
  // console.log('leaderboardStats', leaderboardStats)

  // "Indirect" Event Handler: Sort based on specified column
  switch (sort) {
    case 'total_games':
      if(!sortOrder) {
        leaderboardStats.sort((a, b) => b.stat.total_games - a.stat.total_games);
      } else {
        leaderboardStats.sort((a, b) => a.stat.total_games - b.stat.total_games);
      }
      break;
    case 'total_pinfall':
      if(!sortOrder) {
        leaderboardStats.sort((a, b) => b.stat.total_pinfall - a.stat.total_pinfall);
      } else {
        leaderboardStats.sort((a, b) => a.stat.total_pinfall - b.stat.total_pinfall);
      }
      break;
    case 'average':
      if(!sortOrder) {
        leaderboardStats.sort((a, b) => b.stat.average - a.stat.average);
      } else {
        leaderboardStats.sort((a, b) => a.stat.average - b.stat.average);
      }
      break;
    case 'high_score':
      if(!sortOrder) {
        leaderboardStats.sort((a, b) => b.stat.high_score - a.stat.high_score);
      } else {
        leaderboardStats.sort((a, b) => a.stat.high_score - b.stat.high_score);
      }
      break;
    case 'low_score':
      if(!sortOrder) {
        leaderboardStats.sort((a, b) => b.stat.low_score - a.stat.low_score);
      } else {
        leaderboardStats.sort((a, b) => a.stat.low_score - b.stat.low_score);
      }
      break;
    default:
      // no action
  }

  // Filters to only 5 or less stats
  let topFiveLeaderboard = [];
  // for(let i = 0; i < Math.min(leaderboardStats.length, 5); i++) {
  for(let i = 0; i < Math.min(leaderboardStats.length); i++) { // render all for now...
    topFiveLeaderboard[i] = leaderboardStats[i];
  }

  // RenderLeaderboard
  // Note: Using .indexOf is inefficient
  const renderLeaderboard = topFiveLeaderboard.map(leaderStat => {
    return (
      <tr className='multiRow' key={leaderStat.id}>
        <td>{(!sortOrder ? topFiveLeaderboard.indexOf(leaderStat) + 1 : topFiveLeaderboard.length - topFiveLeaderboard.indexOf(leaderStat))}</td>
        <td>{leaderStat.username}</td>
        <td>{leaderStat.stat.total_games}</td>
        <td>{leaderStat.stat.total_pinfall}</td>
        <td>{leaderStat.stat.average}</td>
        <td>{leaderStat.stat.high_score}</td>
        <td>{leaderStat.stat.low_score}</td>
      </tr>
    )
  })
  
  const renderMyFriends = joinFriends?.sort((a, b) => a.friendee.username.localeCompare(b.friendee.username))
  .map(joinFriend => {
    return <FriendCard key={joinFriend.id} joinFriend={joinFriend} onGoToFriendStats={onGoToFriendStats} onDeleteFriend={onDeleteFriend} />
  })

  if(joinFriends.length === 0) {
    return (
      <div>
        <div className='friendContainer'>
          <h3>You have no friends saved in your Friends List!</h3>
        </div>
        <br/>
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <tr className='topRow'>
              <th>Username</th>
              <th>View Stats</th>
              <th>Remove Friend</th>
            </tr>
            {renderMyFriends}
          </tbody>
        </table>
        <br/>
        <div className='Headers'>
          <h3>LEADERBOARD</h3>
        </div>
        <br/>
        <table>
          <tbody>
            <tr className='topRow'>
              <th>Rank</th>
              <th>Username</th>
              <th onClick={handleSort} style={{cursor: 'pointer'}}>Total Games{(sort === 'total_games' && sortOrder === false ? ' ↓' : (sort === 'total_games' && sortOrder === true ? ' ↑' : ''))}</th>
              <th onClick={handleSort} style={{cursor: 'pointer'}}>Total Pinfall{(sort === 'total_pinfall' && sortOrder === false ? ' ↓' : (sort === 'total_pinfall' && sortOrder === true ? ' ↑' : ''))}</th>
              <th onClick={handleSort} style={{cursor: 'pointer'}}>Average{(sort === 'average' && sortOrder === false ? ' ↓' : (sort === 'average' && sortOrder === true ? ' ↑' : ''))}</th>
              <th onClick={handleSort} style={{cursor: 'pointer'}}>High Score{(sort === 'high_score' && sortOrder === false ? ' ↓' : (sort === 'high_score' && sortOrder === true ? ' ↑' : ''))}</th>
              <th onClick={handleSort} style={{cursor: 'pointer'}}>Low Score{(sort === 'low_score' && sortOrder === false ? ' ↓' : (sort === 'low_score' && sortOrder === true ? ' ↑' : ''))}</th>
            </tr>
            {renderLeaderboard}
          </tbody>
        </table>
        <br/>
      </div>
    )
  }
}

export default FriendsList;