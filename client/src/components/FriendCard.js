import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { setUserId } from '../features/user/userSlice';
// import { useDeleteFriendMutation } from '../app/services/friendsApi';

function FriendCard({joinFriend, onGoToFriendStats, onDeleteFriend}) {

  // Redux methods
  // const dispatch = useDispatch();
  // const [deleteFriend] = useDeleteFriendMutation()

  // let navigate = useNavigate();

  const goToFriendStats = () => {
    // dispatch(setUserId(joinFriend.friendee.id))
    // navigate('/friendslist/myfriends/friendstats');

    onGoToFriendStats(joinFriend.friendee);
  }

  const handleDelete = () => {
    // deleteFriend(joinFriend.id)

    onDeleteFriend(joinFriend);
  }
  
  return (
    <tr className='multiRow'>
      <td>{joinFriend.friendee.username}</td>
      <td><button onClick={goToFriendStats} className='moreButton'>View</button></td>
      <td><button onClick={handleDelete} className='deleteButton'>Remove</button></td>
    </tr>
  )
}

export default FriendCard;