import React from 'react';
import FriendCard from './FriendCard';
import UserCard from './UserCard';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useGetMyFriendsQuery } from '../app/services/friendsApi';
import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList({joinFriends}) {

  const { data: user=null } = useAutoLoginQuery();
  // const { data: joinFriends=[] } = useGetMyFriendsQuery(user.id);
  const { data: allUsers=[] } = useGetAllUsersQuery();

  const sortJoinFriends = [...joinFriends].sort((a, b) => a.friendee.username.localeCompare(b.friendee.username))
  // console.log(sortJoinFriends);

  const renderMyFriends = sortJoinFriends?.map(joinFriend => {
    return <FriendCard key={joinFriend.id} joinFriend={joinFriend} />
  })

  const sortAllUsers = [...allUsers].sort((a, b) => a.username.localeCompare(b.username))
  // console.log(sortAllUsers);

  // const renderAllUsers = allUsers?.map(anUser => {
  const renderAllUsers = sortAllUsers?.map(anUser => {
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