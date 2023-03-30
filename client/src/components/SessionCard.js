import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteSessionMutation } from '../app/services/mySessionsApi';
import { useDispatch } from 'react-redux';
import { setSession } from '../features/session/sessionSlice';

function SessionCard({ session }) {

  const [deleteSession] = useDeleteSessionMutation()

  const dispatch = useDispatch();

  let navigate = useNavigate()
  
  // GET array of games on click
  const handleDetailsClick = () => {
    // Need to get Session.id on click then redirect to Games route
    dispatch(setSession(session))
    navigate('/mygames/games');

    // fetch(`/game_sessions/${session.id}`)
    // .then(res => {
    //   if(res.ok) {
    //     res.json()
    //     .then(data => {
    //       setMyGames(data.games);
    //     })
    //   } else {
    //     res.json()
    //     .then(json => setErrors(json["errors"]))
    //   }
    // })
  }
  
  const handleDelete = () => {
    deleteSession(session.id)
    // Frontend Render DELETE
    // setMySessions(mySessions.filter(s => s.id !== session.id))
    
    // Backend DELETE
    // fetch(`/game_sessions/${session.id}`, {method: "DELETE"})
  }

  return (
    <div>
      <br/>
      <div className='sessionContainer'>
        <h3>Bowling Session on {session.date}</h3>
      </div>
      <br/>
      <button onClick={handleDetailsClick} className='moreButton'>Game Details</button>
      <button onClick={handleDelete} className='deleteButton'>Delete Session</button>
      <br/><br/>
      <table>
        <thead>
        </thead>
        <tbody>
          <tr className='topRow'>
            <th>Date</th>
            <th>Number of Games</th>
            <th>Total Pinfall</th>
            <th>Session Average</th>
            <th>High Score</th>
            <th>Low Score</th>
            <th>Total Strikes</th>
            <th>Total Spares</th>
            <th>Total Open Frames</th>
          </tr>
          <tr className='middleRow'>
            <td>{session.date}</td>
            <td>{session.number_of_games}</td>
            <td>{session.pinfall}</td>
            <td>{session.average}</td>
            <td>{session.high_score}</td>
            <td>{session.low_score}</td>
            <td>{session.strikes}</td>
            <td>{session.spares}</td>
            <td>{session.open_frames}</td>
          </tr>
        </tbody>
      </table>
      <br/>
      <div className='notes'>
        <h4><strong>Session Notes: </strong>{session.notes}</h4>
      </div>
      <div className='divider'>
        <hr className='dividerLine'/>
      </div>
    </div>
  )
}

export default SessionCard;