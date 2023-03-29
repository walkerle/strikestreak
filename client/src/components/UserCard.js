import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useAddFriendMutation } from '../app/services/friendsApi';

function UserCard({ anUser }) {

  const { data: user } = useAutoLoginQuery()
  const [addFriend, {error}] = useAddFriendMutation()

  let navigate = useNavigate();

  const form = {
    friender_id: user.id,
    friendee_id: anUser.id
  }

  const handleAdd = () => {
    addFriend(form)
    navigate(`/friendslist/myfriends`);
  }

  return (
    <tr>
      <td>{anUser.username}</td>
      <td><button onClick={handleAdd}>{(error ? error.data.errors.map((err) => (<h4 style={{color:'red'}}>{err.toUpperCase()}</h4>)) : 'Add')}</button></td>
    </tr>
  )
}

export default UserCard;

// {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")}

// {error?.data.errors.map((err) => (
//   <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
// ))}