import React from 'react';
// import { useDeleteSessionMutation } from '../app/services/mySessionsApi';
// import { useDispatch } from 'react-redux';
// import { setSession } from '../features/session/sessionSlice';

function SessionCard({session, onGoToGames, onGoToSessionUpdateForm, onDeleteSession}) {

  // Redux methods
  // const [deleteSession] = useDeleteSessionMutation()
  // const dispatch = useDispatch();
  
  // Event handler: Update session state and go to session's Games summary
  const goToGames = () => {
    // Redux methods
    // dispatch(setSession(session))

    onGoToGames(session);
  }

  // Event Handler: Go to Update Form
  const goToUpdateForm = () => {
    onGoToSessionUpdateForm(session);
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
      <button onClick={goToGames} className='moreButton'>Session Details</button>
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