import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route/*, useParams*/ } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Stats from './components/Stats';
import SessionsLayout from './components/SessionsLayout';
import Sessions from './components/Sessions';
import SessionFormAdd from './components/SessionFormAdd';
import SessionFormEdit from './components/SessionFormEdit';
import GamesLayout from './components/GamesLayout';
import Games from './components/Games';
import GameFormAdd from './components/GameFormAdd';
import GameFormEdit from './components/GameFormEdit';
import FriendsLayout from './components/FriendsLayout';
import FriendsList from './components/FriendsList';
import FriendStats from './components/FriendStats';
import UsersList from './components/UsersList';
// import { useAutoLoginQuery } from './app/services/userApi';

function App() {
  
  // Redux method
  // const { data: user } = useAutoLoginQuery();
  
  // React state(s)
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [sessions, setSessions] = useState([]);
  const [session, setSession] = useState({});
  const [games, setGames] = useState([]);
  const [game, setGame] = useState({});
  const [joinFriends, setJoinFriends] = useState([]);
  const [friendStats, setFriendStats] = useState([]);
  const [errors, setErrors] = useState(false);

  // react-router-dom methods
  // let { gameId } = useParams();
  const navigate = useNavigate()

  // Fetch user data
  useEffect(() => {
    // fetch(`/me`)
    fetch(`/users/1`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setUser(user)
          setStats(user.stat)
          setSessions(user.stat.game_sessions)
          setJoinFriends(user.join_friends)
          console.log(user); // Remove on final release
          // console.log(`${user.username} is already logged in`); // Remove on final release
        })
      } else {
        res.json()
        .then(json => setErrors(json["errors"]))
      }
    })
  }, [games])
  // Dependency array: Fetch data anytime there's a CRUD action in session? or game?

  //////////////////////////////////////////////////////////////////////////////////

  // SESSIONS EVENT HANDLERS:
  // Event Handler: Add a session
  const onAddSession = (formObj) => {
    fetch(`/game_sessions`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formObj)
    })
    .then(res => res.json())
    // Pessimistic Frontend Render
    .then(data => setSessions([...sessions, data]))

    navigate('/sessions');
  }

  // Event Handler: Update session state and go to Session Update Form
  const onGoToSessionUpdateForm = (sessionObj) => {
    setSession(sessionObj);
    navigate('/sessions/edit');
  }

  // Event Handler: Update a session
  const onUpdateSession = (formObj) => {
    // Optimistic Frontend Render
    setSessions(sessions.map(session => session.id === formObj.id ? formObj : session))

    // Backend
    fetch(`/game_sessions/${formObj.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formObj)
    })
    .then(res => res.json())
    // Pessimistic Frontend Render
    // .then(data => setSessions(sessions.map(session => session.id === data.id ? data : session)))

    navigate('/sessions');
  }

  // Event Handler: Delete a session
  const onDeleteSession = (sessionObj) => {
    // Optimistic Frontend Render
    setSessions(sessions.filter(session => session.id !== sessionObj.id))

    // Backend
    fetch(`/game_sessions/${sessionObj.id}`, {method: "DELETE"})
  }

  //////////////////////////////////////////////////////////////////////////////////

  // GAMES EVENT HANDLERS:
  // Event Handler: Update session state and go to session's Games summary
  const onGoToGames = (sessionObj) => {
    setSession(sessionObj);
    setGames(sessionObj.games)
    navigate('games');
  }

  // Event Handler: Add a game
  const onAddGame = (formObj) => {
    fetch ('/games', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formObj)
    })
    .then(res => {
      if (res.ok) {
        res.json()
        // Pessimistic Frontend Render
        .then(data => setGames([...games, data]))
      } else {
        res.json().then(errors => console.log(errors))
      }
    })

    navigate('/games');
  }

  // Event Handler: Update game state and go to Game Update Form
  const onGoToGameUpdateForm = (gameObj) => {
    setGame(gameObj);
    navigate('/games/edit')
  }

  // Event Handler: Update a game
  const onUpdateGame = (formObj) => {
    // Optimistic Frontend Render
    setGames(games.map(game => game.id === formObj.id ? formObj : game))

    // Backend
    fetch(`/games/${formObj.id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(formObj)
    })
    .then(res => res.json())
    // Pessimistic Frontend Render
    // .then(data => setGames(games.map(game => game.id === data.id ? data : game)))

    navigate('/games');
  }

  // Event Handler: Delete a game
  const onDeleteGame = (gameObj) => {
    // Optimistic Frontend Render
    setGames(games.filter(game => game.id !== gameObj.id))
    // This doesn't update Sessions!

    // Backend
    fetch(`/games/${gameObj.id}`, {method: "DELETE"})
  }

  if(!user) {
    return (
      <div className='App'>
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')} */}
        <NavBar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        {/*{(user == null ? <h3>Logged Out</h3> : <h3>User: {user.username}</h3>)} {/* Remove on final release */}
      </div>
    );
  } else {
    return (
      <div className="App">
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')} */}
        <NavBar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stats' element={<Stats stats={stats} />} />
          <Route path='/sessions' element={<SessionsLayout />}>
            <Route path='' element={<Sessions sessions={sessions} onGoToGames={onGoToGames} onGoToSessionUpdateForm={onGoToSessionUpdateForm} onDeleteSession={onDeleteSession} />} />
            <Route path='new' element={<SessionFormAdd stats={stats} onAddSession={onAddSession} />} />
            <Route path='edit' element={<SessionFormEdit session={session} onUpdateSession={onUpdateSession} />} />
          </Route>
          <Route path='/games' element={<GamesLayout session={session} />}>
            <Route path='' element={<Games games={games} onGoToGameUpdateForm={onGoToGameUpdateForm} onDeleteGame={onDeleteGame} />} />
            <Route path='new' element={<GameFormAdd session={session} onAddGame={onAddGame} />} />
            <Route path='edit' element={<GameFormEdit game={game} onUpdateGame={onUpdateGame} />} />
          </Route>
          <Route path='/friends' element={<FriendsLayout />}>
            <Route path='' element={<FriendsList joinFriends={joinFriends} />} />
            <Route path='friendstats' element={<FriendStats />} />
            <Route path='find' element={<UsersList />} />
          </Route>
        </Routes>
        {/*{(user == null ? <h3>Logged Out</h3> : <h3>User: {user.username}</h3>)} {/* Remove on final release */}
        {/*<h3>stat.id: {(stats == null ? 'null' : stats.id )}</h3> {/* Remove on final release */}
      </div>
    );
  }
}

export default App;
