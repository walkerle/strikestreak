import React from 'react';
import FriendCard from './FriendCard';
import UserCard from './UserCard';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useGetMyFriendsQuery } from '../app/services/friendsApi';
import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList() {

  const { data: user=null } = useAutoLoginQuery();
  const { data: joinFriends=null } = useGetMyFriendsQuery(user.id);
  const { data: allUsers=[] } = useGetAllUsersQuery();

  const renderMyFriends = joinFriends?.map(joinFriend => {
    return <FriendCard key={joinFriend.id} joinFriend={joinFriend} />
  })

  const renderAllUsers = allUsers?.map(anUser => {
    return <UserCard key={anUser.id} anUser={anUser} />
  })

  return (
    <div>
      <div className='friendContainer'>
        <h3>My Friends</h3>
      </div>
      <br/>
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
      <div className='friendContainer'>
        <h3>Find a Friend</h3>
      </div>
      <br/>
      <table>
        <tbody>
          <tr className='topRow'>
            <th>Username</th>
            <th>Add Friend</th>
          </tr>
          {renderAllUsers}
        </tbody>
      </table>
      <br/>
    </div>
  )
}

export default FriendsList;