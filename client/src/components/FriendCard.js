import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../features/user/userSlice';
import { useDeleteFriendMutation } from '../app/services/friendsApi';

function FriendCard({ joinFriend }) {

  const dispatch = useDispatch();

  const [deleteFriend] = useDeleteFriendMutation()

  let navigate = useNavigate();

  const handleStats = () => {
    dispatch(setUserId(joinFriend.friendee.id))
    navigate('/friendslist/myfriends/friendstats');
  }

  const handleDelete = () => {
    deleteFriend(joinFriend.id)
  }
  
  return (
    <tr>
      <td>{joinFriend.friendee.username}</td>
      <td><button onClick={handleStats}>View</button></td>
      <td><button onClick={handleDelete}>Remove</button></td>
    </tr>
  )
}

export default FriendCard;