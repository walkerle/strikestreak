import React from 'react';
import SessionCard from './SessionCard';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useGetMySessionsQuery } from '../app/services/mySessionsApi';

function Sessions({sessions, onGoToGames, onGoToSessionUpdateForm, onDeleteSession}) {

  // const { data: user } = useAutoLoginQuery(); // User is already in Redux store, don't need to autologinquery? useSelector()?
  // const { data: mySessions } = useGetMySessionsQuery(user.stat.id);
  // const mySessions = user.stat.game_sessions

  // const [errors, setErrors] = useState([]);
  
  const renderMySessions = sessions?.sort((a,b) => Date.parse(b.date) - Date.parse(a.date))
  .map(session => {
    return <SessionCard key={session.id} session={session} onGoToGames={onGoToGames} onGoToSessionUpdateForm={onGoToSessionUpdateForm} onDeleteSession={onDeleteSession} />
  })
  
  if(sessions.length === 0) {
    return (
      <div className='sessionContainer'>
        <h3>You have no game sessions recorded!</h3>
      </div>
    )
  } else {
    return (
      <div>
        {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')} */}
        {renderMySessions}
      </div>
    )
  }
}

export default Sessions;