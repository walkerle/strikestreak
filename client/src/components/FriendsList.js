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
      <h2>MY FRIENDS</h2>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>View Stats</th>
            <th>Remove Friend</th>
          </tr>
          {renderMyFriends}
        </tbody>
      </table>
      <br/>
      <h2>FIND A FRIEND</h2>
      <table>
        <tbody>
          <tr>
            <th>Username</th>
            <th>Add Friend</th>
          </tr>
          {renderAllUsers}
        </tbody>
      </table>
    </div>
  )
}

export default FriendsList;