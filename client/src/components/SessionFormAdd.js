import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAutoLoginQuery } from '../app/services/userApi';
// import { useAddSessionMutation } from '../app/services/mySessionsApi';

function SessionFormAdd({stats, onAddSession}) {

  // Redux method
  // const [addSession, {error}] = useAddSessionMutation()

  // let navigate = useNavigate()

  // const { data: user } = useAutoLoginQuery();

  // Initial form data
  const initialForm = {
    date: "",
    number_of_games: 0,
    pinfall: 0,
    average: 0,
    high_score: 0,
    low_score: 0,
    strikes: 0,
    spares: 0,
    open_frames: 0,
    notes: "",
    stat_id: stats.id
  }

  // React state(s)
  const [form, setForm] = useState(initialForm);
  // const [errors, setErrors] = useState([]);

  // Event Handler: Make form a controlled input
  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // Event Handler: Add Session
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Redux method
    // addSession(form)

    // navigate('/mysessions/sessions');

    onAddSession(form);

    // Frontend Render and Backend CREATE
    // const config = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(form)
    // }
    
    // fetch(`/game_sessions`, config)
    // .then(res => {
    //   if(res.ok) {
    //     res.json()
    //     .then(data => {
    //       setErrors([])
    //       navigate('/mysessions/sessions');
    //     })
    //   } else {
    //     res.json().then(json => setErrors(json["errors"]))
    //   }
    // })
    
    setForm(initialForm);
  }

  return (
    <div>
      {/* {(errors ? errors.map(error => <h3 style={{color:'red'}}>{error.toUpperCase()}</h3>) : "")} */}
      {/* {error?.data.errors.map((err) => (
        <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
      ))} */}
      <br/>
      <div className='sessionContainer'>
        <h3>Add New Session</h3>
      </div>
      <br/>
      <div className='sessionForm'>
        <form onSubmit={handleFormSubmit}>
          <strong>Date: </strong>
          <input 
            onChange={handleFormChange}
            type="text"
            name="date"
            placeholder="Enter Date"
            value={form.date}
          /><br/>
          <strong>Total Games Played: </strong>{form.number_of_games}
          <br/>
          <strong>Total Pinfall: </strong>{form.pinfall}
          <br/>
          <strong>Average Score: </strong>{form.average}
          <br/>
          <strong>High Score: </strong>{form.high_score}
          <br/>
          <strong>Low Score: </strong>{form.low_score}
          <br/>
          <strong>Total Strikes: </strong>{form.strikes}
          <br/>
          <strong>Total Spares: </strong>{form.spares}
          <br/>
          <strong>Total Open Frames: </strong>{form.open_frames}
          <br/>
          <strong>Notes: </strong>
          <input 
            onChange={handleFormChange}
            type="text"
            name="notes"
            placeholder="Enter Any Notes"
            value={form.notes}
          /><br/><br/>
          <button type="submit" className='addButton'>Add New Session</button>
        </form>
      </div>
    </div>
  )
}

export default SessionFormAdd;