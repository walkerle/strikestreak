import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function FriendCard({ joinFriend, joinFriends, setJoinFriends, setFriendStats }) {

  const [friend, setFriend] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/join_friends/${joinFriend.id}`)
    .then(res => res.json())
    .then(data => setFriend(data.friendee))
  }, [])

  const handleStats = () => {
    fetch(`/users/${friend.id}`)
    .then(res => res.json())
    .then(data => {
      setFriendStats(data);
      navigate('/friendslist/friendstats');
    })
  }

  const handleDelete = () => {
    // Frontend Render DELETE
    setJoinFriends(joinFriends.filter(jF => jF.id !== joinFriend.id))
    
    // Backend DELETE
    fetch(`/join_friends/${joinFriend.id}`, {method: "DELETE"}) // Need to delete join_friend id, not the friendee id (friend.id)
  }
  
  return (
    <tr>
      <td>{friend.username}</td>
      <td>stuff</td>
      <td>stuff</td>
      <td><button onClick={handleStats}>View</button></td>
      <td><button onClick={handleDelete}>Remove</button></td>
    </tr>
  )
}

export default FriendCard;