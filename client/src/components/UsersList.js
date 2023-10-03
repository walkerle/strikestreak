import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
// import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function UsersList({onAddFriend, currentUser, errors}) {

  const errorsArr = errors.errors;

  // React state(s)
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [submitSearch, setSubmitSearch] = useState('');

  // Redux method
  // const { data: allUsers=[], error } = useGetAllUsersQuery();

  // Fetch all users data
  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  const searchUsers = users.filter(user => currentUser.id !== user.id) // Filter out currentUser
  .sort((a, b) => a.username.localeCompare(b.username)) // sort users alphabetically
  .filter(user => user.username.toLowerCase().includes(submitSearch.toLowerCase()));

  const renderUsers = searchUsers?.map(user => {
    return <UserCard key={user.id} user={user} onAddFriend={onAddFriend} />
  })

  // Event Handler: Make search a controlled input => Does is need to be a controlled input?
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  }

  // Event Handler: Search users based on search bar on submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSubmitSearch(search);
    setSearch('');
  }

  return (
    <div>
      <div className='friendContainer'>
        <h3>Find a Friend</h3>
      </div>
      <br/>
      <form onSubmit={handleSearchSubmit}>
        <input
          onChange={handleSearchChange}
          placeholder='🔍'
          type="text"
          name="search"
          value={search}
        />
        <button type="submit" className="moreButton">Search</button>
      </form>
      <br/>
      {(errorsArr ? <><div className='errors'><h4>FRIEND IS ALREADY ON YOUR FRIENDS LIST</h4></div><br/></> : "")}
      <table>
        <tbody>
          {(searchUsers.length === 0 ? <tr className='topRow'><th>No Results</th></tr> : // Render search table
            (<><tr className='topRow'>
              <th>Username</th>
              <th>Add Friend</th>
            </tr>
            {renderUsers}</>))
          }
        </tbody>
      </table>
      <br/>
      <br/>
    </div>
  )
}

export default UsersList;