import React from 'react';
import FriendCard from './FriendCard';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useGetMyFriendsQuery } from '../app/services/friendsApi';
// import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList({joinFriends, onGoToFriendStats, onDeleteFriend}) {

  // Redux methods
  // const { data: user=null } = useAutoLoginQuery();
  // const { data: joinFriends=[] } = useGetMyFriendsQuery(user.id);
  // const { data: allUsers=[] } = useGetAllUsersQuery();

  const sortJoinFriends = joinFriends.sort((a, b) => a.friendee.username.localeCompare(b.friendee.username))
  // console.log(sortJoinFriends);

  const renderMyFriends = sortJoinFriends?.map(joinFriend => {
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
      </div>
    )
  }
}

export default FriendsList;