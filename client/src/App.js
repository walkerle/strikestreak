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
import NotFound from './components/NotFound';
// import { useAutoLoginQuery } from './app/services/userApi';

function App() {
  
  // Redux method
  // const { data: user } = useAutoLoginQuery();
  
  // React state(s)
  const [user, setUser] = useState(false);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});
  const [sessions, setSessions] = useState([]);
  const [session, setSession] = useState({});
  const [games, setGames] = useState([]);
  const [game, setGame] = useState({});
  const [joinFriends, setJoinFriends] = useState([]);
  const [friend, setFriend] = useState({});
  const [friendStats, setFriendStats] = useState({});
  const [errors, setErrors] = useState(false);

  // react-router-dom methods
  // let { gameId } = useParams();
  const navigate = useNavigate()

  // Fetch current user data
  useEffect(() => {
    fetch(`/me`)
    // fetch(`/users/1`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setUser(user)
          setStats(user.stat)
          setSessions(user.stat.game_sessions)
          setJoinFriends(user.join_friends)
          // console.log(user); // Remove on final release
          // console.log(`${user.username} is already logged in`); // Remove on final release
        })
      } else {
        res.json().then(errors => console.log(errors))
      }
    })
  }, [games])

  // Fetch all users data
  useEffect(() => {
    fetch(`/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [user])
  
  //////////////////////////////////////////////////////////////////////////////////
  
  // SIGNUP/LOGIN/LOGOUT EVENT HANDLERS:
  // Event Handler: User Signup
  const onSignup = (signupObj) => {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body:JSON.stringify(signupObj),
    })
    .then(res => {
      if(res.ok) {
        res.json()
        .then((user) => {
          setUser(user)
          setStats(user.stat)
          // setSessions(user.stat.game_sessions)
          // setJoinFriends(user.join_friends)
          setErrors(false)
          // console.log(user); // Comment out on final release
          navigate('/mystats');
        })
      } else {
        res.json()
        .then(errors => setErrors(errors))
      }
    });

  }

  // Event Handler: Login user
  const onLogin = (loginObj) => {
    fetch('/login', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(loginObj)
    })
    .then(res => {
      if(res.ok) {
        res.json()
        .then(user => {
          setUser(user)
          setStats(user.stat)
          setSessions(user.stat.game_sessions)
          setJoinFriends(user.join_friends)
          setErrors(false)
          // console.log(user); // Comment out on final release
          navigate('/mystats');
        })
      } else {
        res.json().then(errors => setErrors(errors))
      }
    })

  }

  // Event Handler: Logout user
  const onLogout = () => {
    fetch('/logout', {method: "DELETE"})
    .then(() => {
      setUser(null)
      setStats({})
      setSessions([])
      setJoinFriends([])
      setErrors(false)
      // console.log('User logged out'); // Comment out on final release
    })

    navigate('/');
  }

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

    navigate('/mysessions');
  }

  // Event Handler: Update session state and go to Session Update Form
  const onGoToSessionUpdateForm = (sessionObj) => {
    setSession(sessionObj);
    navigate('/mysessions/edit');
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

    navigate('/mysessions');
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
    navigate('mygames');
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

    navigate('/mygames');
  }

  // Event Handler: Update game state and go to Game Update Form
  const onGoToGameUpdateForm = (gameObj) => {
    setGame(gameObj);
    navigate('/mygames/edit')
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
    // .then(data => console.log(data))

    navigate('/mygames');
  }

  // Event Handler: Delete a game
  const onDeleteGame = (gameObj) => {
    // Optimistic Frontend Render
    setGames(games.filter(game => game.id !== gameObj.id))
    // This DOES NOT update Sessions state!

    // Backend
    fetch(`/games/${gameObj.id}`, {method: "DELETE"})
  }

  //////////////////////////////////////////////////////////////////////////////////
  // FRIENDS EVENT HANDLERS:
  // Event Handler: Add a friend
  const onAddFriend = (friendObj) => {
    fetch('/join_friends', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({friender_id: user.id, friendee_id: friendObj.id})
    })
    // Pessimistic Frontend Render
    .then(res => {
      if(res.ok) {
        res.json().then(data => setJoinFriends([...joinFriends, data]))
        setErrors(false)
        navigate('/myfriends');
      } else {
        res.json().then(errors => {setErrors(errors)})
      }
    })
  }

  // Event Handler: View a friend's stats
  const onGoToFriendStats = (friendObj) => {
    fetch(`/users/${friendObj.id}`)
    .then(res => res.json())
    .then(data => {
      setFriend(data);
      setFriendStats(data.stat);
      navigate('/myfriends/stats');
    })
  }

  // Event Handler: Remove a friend
  const onDeleteFriend = (joinFriendObj) => {
    // Optimistic Frontend Render
    setJoinFriends(joinFriends.filter(joinFriend => joinFriend.id !== joinFriendObj.id))

    // Backend
    fetch(`/join_friends/${joinFriendObj.id}`, {method: "DELETE"})
  }

  if(!user) {
    return (
      <div className='App'>
        <NavBar user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup onSignup={onSignup} errors={errors} />} />
          <Route path='/login' element={<Login onLogin={onLogin} errors={errors} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="App">
        <NavBar user={user} onLogout={onLogout} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mystats' element={<Stats stats={stats} />} />
          <Route path='/mysessions' element={<SessionsLayout />}>
            <Route path='' element={<Sessions sessions={sessions} onGoToGames={onGoToGames} onGoToSessionUpdateForm={onGoToSessionUpdateForm} onDeleteSession={onDeleteSession} />} />
            <Route path='new' element={<SessionFormAdd stats={stats} onAddSession={onAddSession} />} />
            <Route path='edit' element={<SessionFormEdit session={session} onUpdateSession={onUpdateSession} />} />
          </Route>
          <Route path='/mygames' element={<GamesLayout session={session} />}>
            <Route path='' element={<Games games={games} onGoToGameUpdateForm={onGoToGameUpdateForm} onDeleteGame={onDeleteGame} />} />
            <Route path='new' element={<GameFormAdd session={session} onAddGame={onAddGame} />} />
            <Route path='edit' element={<GameFormEdit game={game} onUpdateGame={onUpdateGame} />} />
          </Route>
          <Route path='/myfriends' element={<FriendsLayout />}>
            <Route path='' element={<FriendsList joinFriends={joinFriends} onGoToFriendStats={onGoToFriendStats} onDeleteFriend={onDeleteFriend} users={users} />} />
            <Route path='stats' element={<FriendStats friend={friend} friendStats={friendStats} />} />
            <Route path='find' element={<UsersList onAddFriend={onAddFriend} currentUser={user} errors={errors} users={users} />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
