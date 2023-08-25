import './App.css';
import React from 'react';
import { Routes, Route/*, useParams*/ } from 'react-router-dom';
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
import EditGameForm from './components/EditGameForm';
import GameForm from './components/GameForm';
import FriendsLayout from './components/FriendsLayout';
import FriendsList from './components/FriendsList';
import FriendStats from './components/FriendStats';
import UsersList from './components/UsersList';
import { useAutoLoginQuery } from './app/services/userApi';

function App() {

  const { data: user } = useAutoLoginQuery();
  
  // const [user, setUser] = useState(null);
  // const [overallStats, setOverallStats] = useState(null);
  // const [mySessions, setMySessions] = useState([]);
  // const [myGames, setMyGames] = useState([]);
  // const [editGame, setEditGame] = useState({});
  // const [joinFriends, setJoinFriends] = useState([]);
  // const [friendStats, setFriendStats] = useState([]);
  // const [errors, setErrors] = useState(false);

  // let { gameId } = useParams();

  // useEffect(() => {
  //   fetch(`/me`)
  //   .then(res => {
  //     if(res.ok) {
  //       res.json()
  //       .then(user => {
  //         setUser(user)
  //         setOverallStats(user.overall_stat)
  //         setJoinFriends(user.join_friends)
  //         console.log(`${user.username} is already logged in`); // Remove on final release
  //       })
  //     } else {
  //       res.json()
  //       .then(json => setErrors(json["errors"]))
  //     }
  //   })
  // }, [])

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
          <Route path='/mystats' element={<MyStats />} />
          <Route path='/mysessions' element={<SessionsLayout />}>
            <Route path='sessions' element={<MySessions />} />
            <Route path='newsession' element={<SessionForm />} />
          </Route>
          <Route path={`/mygames`} element={<GamesLayout />}> {/* /mysessions/# */}
            <Route path={`games`} element={<MyGames />} /> {/* /mysessions/#/games */}
            <Route path='game/edit' element={<EditGameForm />} /> {/* /mysessions/#/games/# */}
            <Route path='newgame' element={<GameForm />} /> {/* /mysessions/#/newgame */}
          </Route>
          <Route path={`/friendslist`} element={<FriendsLayout />}>
            <Route path='myfriends' element={<FriendsList />} />
            <Route path='myfriends/friendstats' element={<FriendStats />} />
            <Route path='findfriend' element={<UsersList />} />
          </Route>
        </Routes>
        {/*{(user == null ? <h3>Logged Out</h3> : <h3>User: {user.username}</h3>)} {/* Remove on final release */}
        {/*<h3>overall_stat.id: {(overallStats == null ? 'null' : overallStats.id )}</h3> {/* Remove on final release */}
      </div>
    );
  }
}

export default App;
