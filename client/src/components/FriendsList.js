import React from 'react';
import FriendCard from './FriendCard';
import UserCard from './UserCard';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useGetMyFriendsQuery } from '../app/services/friendsApi';
import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function FriendsList() {

  const { data: user=null } = useAutoLoginQuery();
  const { data: joinFriends=[] } = useGetMyFriendsQuery(user.id);
  const { data: allUsers=[] } = useGetAllUsersQuery(user.id);

  // const [allUsers, setAllUsers] = useState([]);
  // const [errors, setErrors] = useState([]);

  // useEffect(() => {
  //   fetch(`/users`)
  //   .then(res => res.json())
  //   .then(data => setAllUsers(data))
  // }, [])

  const renderMyFriends = joinFriends.map(joinFriend => {
    return <FriendCard key={joinFriend.id} joinFriend={joinFriend} />
  })

  const renderAllUsers = allUsers.map(anUser => {
    return <UserCard key={anUser.id} anUser={anUser} />
  })

  if(joinFriends == null) {
    return (
      <div>
        <h2>FRIENDS LIST</h2>

        <h3>You have no friends...</h3>
        <br/>
        <h2>FIND A FRIEND</h2>
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
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
  } else {
    return (
      <div>
        <h2>FRIENDS LIST</h2>
        <table>
          <tbody>
            <tr>
              <th>Username</th>
              <th>Last Game Played</th>
              <th>Score</th>
              <th>View Stats</th>
              <th>Remove Friend</th>
            </tr>
            {renderMyFriends}
          </tbody>
        </table>
        <br/>
        <h2>FIND A FRIEND</h2>
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
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
}

export default FriendsList;