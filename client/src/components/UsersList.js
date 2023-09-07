import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
// import { useGetAllUsersQuery } from '../app/services/allUsersApi';

function UsersList({onAddFriend, currentUser, errors}) {

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

  const filterCurrentUser = users.filter(user => currentUser.id !== user.id)

  const sortUsers = filterCurrentUser.sort((a, b) => a.username.localeCompare(b.username))

  const searchUsers = sortUsers.filter(user => user.username.toLowerCase().includes(submitSearch.toLowerCase()));

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

  const searchTable = () => {
    return (
      <table>
        <tbody>
          <tr className='topRow'>
            <th>Username</th>
            <th>Add Friend</th>
          </tr>
          {renderUsers}
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <div className='friendContainer'>
        <h3>Find a Friend</h3>
      </div>
      <br/>
      {/* {error?.data.errors.map((err) => (
        <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
      ))} */}
      {/* <br/> */}
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
      {(searchUsers.length === 0 ? <strong>No Results</strong> : searchTable())}
      {/* <table>
        <tbody>
          <tr className='topRow'>
            <th>Username</th>
            <th>Add Friend</th>
          </tr>
          {renderUsers}
        </tbody>
      </table> */}
      <br/>
      {(errors ? errors.errors.map(error => <div className='errors'><h4 style={{color:'red'}}>{error.toUpperCase()}</h4></div>) : "")}
    </div>
  )
}

export default UsersList;