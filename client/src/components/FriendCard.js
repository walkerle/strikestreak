import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserId } from '../features/user/userSlice';
import { useDeleteFriendMutation } from '../app/services/friendsApi';

function FriendCard({ joinFriend }) {

  const dispatch = useDispatch();

  const [deleteFriend] = useDeleteFriendMutation()

  // const [friend, setFriend] = useState([]);

  let navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`/join_friends/${joinFriend.id}`)
  //   .then(res => res.json())
  //   .then(data => setFriend(data.friendee))
  // }, [])

  const handleStats = () => {
    dispatch(setUserId(joinFriend.friendee.id))
    navigate('/friendslist/friendstats');
    
    // fetch(`/users/${friend.id}`)
    // .then(res => res.json())
    // .then(data => {
    //   setFriendStats(data);
    //   navigate('/friendslist/friendstats');
    // })
  }

  const handleDelete = () => {
    deleteFriend(joinFriend.id)
    // Frontend Render DELETE
    // setJoinFriends(joinFriends.filter(jF => jF.id !== joinFriend.id))
    
    // Backend DELETE
    // fetch(`/join_friends/${joinFriend.id}`, {method: "DELETE"}) // Need to delete join_friend id, not the friendee id (friend.id)
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