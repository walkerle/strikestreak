import React from 'react';
import UserCard from './UserCard';
import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList() {

  const { data: allUsers=[], error } = useGetAllUsersQuery();

  const renderAllUsers = allUsers?.map(anUser => {
    return <UserCard key={anUser.id} anUser={anUser} />
  })

  return (
    <div>
      <div className='friendContainer'>
        <h3>Find a Friend</h3>
      </div>
      {error?.data.errors.map((err) => (
        <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
      ))}
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
    </div>
  )
}

export default FriendsList;