import React from 'react';
import SessionCard from './SessionCard';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useGetMySessionsQuery } from '../app/services/mySessionsApi';

function MySessions() {

  const { data: user } = useAutoLoginQuery();
  const { data: mySessions } = useGetMySessionsQuery(user.overall_stat.id);

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
  
  const renderMySessions = mySessions?.map(session => {
    return <SessionCard key={session.id} session={session} />
  })
    
  return (
    <div>
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')} */}
      {renderMySessions}
    </div>
  )
}

export default MySessions;