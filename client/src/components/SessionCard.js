import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useDeleteSessionMutation } from '../app/services/mySessionsApi';
// import { useDispatch } from 'react-redux';
// import { setSession } from '../features/session/sessionSlice';

function SessionCard({session, onGoToUpdateForm, onDeleteSession}) {

  // Redux methods
  // const [deleteSession] = useDeleteSessionMutation()
  // const dispatch = useDispatch();

  let navigate = useNavigate()
  
  // Event handler: GET array of games on click
  const handleDetails = () => {
    // Redux methods
    // Need to get Session.id on click then redirect to Games route
    // dispatch(setSession(session))
    // navigate('/games');

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

  // Event Handler: Update a session's notes
  const goToUpdateForm = () => {
    onGoToUpdateForm(session);
  }
  
  // Event Handler: Delete a session
  const handleDelete = () => {
    // Redux method
    // deleteSession(session.id)

    onDeleteSession(session);
  }

  return (
    <div>
      <div className='sessionContainer'>
        <h3>Bowling Session on {session.date}</h3>
      </div>
      <br/>
      <button onClick={handleDetails} className='moreButton'>Session Details</button>
      <button onClick={goToUpdateForm} className='addButton'>Update Session</button>
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
      <br/>
      <div className='divider'>
        <hr className='dividerLine'/>
      </div>
    </div>
  )
}

export default SessionCard;