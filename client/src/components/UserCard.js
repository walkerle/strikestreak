import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useAddFriendMutation } from '../app/services/friendsApi';

function UserCard({ user, onAddFriend }) {

  // Redux methods
  // const { data: user } = useAutoLoginQuery()
  // const [addFriend, {error}] = useAddFriendMutation()

  // let navigate = useNavigate();

  const handleAdd = () => {
    // addFriend(form)
    // navigate(`/friendslist/myfriends`);

    onAddFriend(user);
  }

  return (
    <tr className='multiRow'>
      <td>{user.username}</td>
      <td><button onClick={handleAdd} className='addButton'>Add</button></td>
    </tr>
  )
}

export default UserCard;
