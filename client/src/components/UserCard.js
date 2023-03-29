import React from 'react';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useAddFriendMutation } from '../app/services/friendsApi';

function UserCard({ anUser }) {

  const { data: user } = useAutoLoginQuery()
  const [addFriend] = useAddFriendMutation()

  const form = {
    friender_id: user.id,
    friendee_id: anUser.id
  }

  const handleAdd = () => {
    addFriend(form)
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
      <td><button onClick={handleAdd} >Add</button></td>
    </tr>
  )
}

export default UserCard;