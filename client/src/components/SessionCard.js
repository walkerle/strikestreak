import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SessionCard({ session, mySessions, setMySessions, setMyGames }) {

  let navigate = useNavigate()

  const [errors, setErrors] = useState([]);
  
  // GET array of games on click
  const handleDetailsClick = () => {
    fetch(`/game_sessions/${session.id}`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          setMyGames(data.games);
          navigate('/mygames/games');
        })
      } else {
        res.json()
        .then(json => setErrors(json["errors"]))
      }
    })
  }

  const handleDelete = () => {
    // Frontend Render DELETE
    setMySessions(mySessions.filter(s => s.id !== session.id))
    
    // Backend DELETE
    fetch(`/game_sessions/${session.id}`, {method: "DELETE"})
  }

  return (
    <div>
      <h3>Bowling Session on {session.date}</h3>

      <button onClick={handleDetailsClick}>Game Details</button>
      <button onClick={handleDelete}>Delete Session</button>
      
      <table>
        <tbody>
          <tr>
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
          <tr>
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
      <strong>Session Notes: </strong>{session.notes}
    </div>
  )
}

export default SessionCard;