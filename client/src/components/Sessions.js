import React from 'react';
import SessionCard from './SessionCard';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useGetMySessionsQuery } from '../app/services/mySessionsApi';

function Sessions({sessions, onGoToUpdateForm, onDeleteSession}) {

  // const { data: user } = useAutoLoginQuery(); // User is already in Redux store, don't need to autologinquery? useSelector()?
  // const { data: mySessions } = useGetMySessionsQuery(user.stat.id);
  // const mySessions = user.stat.game_sessions

  // const [errors, setErrors] = useState([]);

  // GET
  // useEffect(() => {
  //   fetch(`/overall_stats/${overallStats.id}`)
  //   .then(res => {
  //     if(res.ok) {
  //       res.json()
  //       .then(data => {
  //         setMySessions(data.game_sessions)
  //       })
  //     } else {
  //       res.json()
  //       .then(json => setErrors(json["errors"]))
  //     }
  //   })
  // }, [])
  
  const renderMySessions = sessions?.map(session => {
    return <SessionCard key={session.id} session={session} onGoToUpdateForm={onGoToUpdateForm} onDeleteSession={onDeleteSession} />
  })
    
  return (
    <div>
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')} */}
      {renderMySessions}
    </div>
  )
}

export default Sessions;