import React, { useState, useEffect } from 'react';
import FriendCard from './FriendCard';

function FriendsList({ myFriends, setMyFriends }) {

  const [allUsers, setAllUsers] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch(`/users`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => setAllUsers(data))
      } else {
        res.json()
        .then(json => setErrors(json["errors"]))
      }
    })
  }, [])

  const renderMyFriends = myFriends.map(friend => {
    return <FriendCard key={friend.id} friend={friend} />
  })

  if(myFriends == null) {
    return (
      <div>
        <h2>FRIENDS LIST</h2>

        <h3>You have no friends...</h3>
      </div>
    )
  } else {
    return (
      <div>
        <h2>FRIENDS LIST</h2>

        {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')}
        {renderMyFriends}
      </div>
    )
  }
}

export default FriendsList;