import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import MyStats from './components/MyStats';
import SessionsLayout from './components/SessionsLayout';
import MySessions from './components/MySessions';
import SessionForm from './components/SessionForm';
import GamesLayout from './components/GamesLayout';
import MyGames from './components/MyGames';
import GameForm from './components/GameForm';
import FriendsList from './components/FriendsList';

function App() {

  const [user, setUser] = useState(null);
  const [overallStats, setOverallStats] = useState(null);
  const [mySessions, setMySessions] = useState([])
  const [myGames, setMyGames] = useState([])
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch(`/me`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setUser(user)
          setOverallStats(user.overall_stat)
        })
      } else {
        res.json()
        .then(json => setErrors(json["errors"]))
      }
    })
  }, [])

  if(!user) {
    return (
      <div className='App'>
        {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')}
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup setUser={setUser} setOverallStats={setOverallStats} />} />
          <Route path='/login' element={<Login setUser={setUser} setOverallStats={setOverallStats} />} />
        </Routes>
        {(user == null ? <h3>Logged Out</h3> : <h3>User: {user.username}</h3>)}
      </div>
    );
  } else {
    return (
      <div className="App">
        {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')}
        <NavBar user={user} setUser={setUser} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mystats' element={<MyStats overallStats={overallStats} />} />
          <Route path='/mysessions' element={<SessionsLayout />}>
            <Route path='sessions' element={<MySessions overallStats={overallStats} mySessions={mySessions} setMySessions={setMySessions} setMyGames={setMyGames} />} />
            <Route path='newsession' element={<SessionForm overallStats={overallStats} />} />
          </Route>
          <Route path='/mygames' element={<GamesLayout />}>
            <Route path='games' element={<MyGames myGames={myGames} setMyGames={setMyGames} />} />
            <Route path='newgame' element={<GameForm myGames={myGames} />} />
          </Route>
          <Route path='/friendslist' element={<FriendsList user={user} />} />
        </Routes>
        {(user == null ? <h3>Logged Out</h3> : <h3>User: {user.username}</h3>)}
        <h3>overall_stat.id: {(overallStats == null ? 'null' : overallStats.id )}</h3>
      </div>
    );
  }
}

export default App;
