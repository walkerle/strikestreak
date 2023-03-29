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
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }
    
    // fetch(`/join_friends`, config)
    // .then(res => {
    //   if(res.ok) {
    //     res.json()
    //     .then(data => {
    //       setJoinFriends([...joinFriends, data]) // Use Redux...
    //     })
    //   } else {
    //     res.json().then(json => setErrors(json["errors"]))
    //   }
    // })
  }

  return (
    <tr>
      <td>{anUser.username}</td>
      <td><button onClick={handleAdd}>{(error ? error.data.errors.map((err) => (<h4 style={{color:'red'}}>{err.toUpperCase()}</h4>)) : 'Add')}</button></td>
    </tr>
  )
}

export default UserCard;

// {error?.data.errors.map((err) => (
//   <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
// ))}