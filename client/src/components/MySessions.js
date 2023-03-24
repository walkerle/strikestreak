import React, { useState, useEffect } from 'react';
import SessionCard from './SessionCard';

function MySessions({ overallStats, mySessions, setMySessions, setMyGames }) {

  const [errors, setErrors] = useState([]);

  // GET
  useEffect(() => {
    fetch(`/overall_stats/${overallStats.id}`)
    .then(res => {
      if(res.ok) {
        res.json()
        .then(data => {
          setMySessions(data.game_sessions)
        })
      } else {
        res.json()
        .then(json => setErrors(json["errors"]))
      }
    })
  }, [])

  // DELETE - Frontend

  const renderMySessions = mySessions.map(session => {
    return <SessionCard key={session.id} session={session} mySessions={mySessions} setMySessions={setMySessions} setMyGames={setMyGames} setErrors={setErrors} />
  })

  if(overallStats == null) {
    return (
      <div>
        <h3>No Sessions Recorded</h3>
      </div>
    )
  } else {
    return (
      <div>
        {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : '')}
        {renderMySessions}
      </div>
    )
  }
}

export default MySessions;