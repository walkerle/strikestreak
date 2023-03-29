import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAutoLoginQuery } from '../app/services/userApi';
import { useAddSessionMutation } from '../app/services/mySessionsApi';

function SessionForm() {

  const [addSession, {error}] = useAddSessionMutation()

  let navigate = useNavigate()

  const { data: user } = useAutoLoginQuery();

  const initialForm = {
    date: "",
    number_of_games: "",
    pinfall: "",
    average: "",
    high_score: "",
    low_score: "",
    strikes: "",
    spares: "",
    open_frames: "",
    notes: "",
    overall_stat_id: user.overall_stat.id
  }

  const [form, setForm] = useState(initialForm);
  // const [errors, setErrors] = useState([]);

  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // CREATE
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    addSession(form)
    navigate('/mysessions/sessions');

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
      {error?.data.errors.map((err) => (
        <h3 style={{color:'red'}}>{err.toUpperCase()}</h3>
      ))}
      <h2>Add New Session</h2>
      <form onSubmit={handleFormSubmit}>
        <strong>Date: </strong>
        <input 
          onChange={handleFormChange}
          type="text"
          name="date"
          placeholder="Enter Date"
          value={form.date}
        /><br/>
        <strong>Total Games Played: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="number_of_games"
          placeholder="Enter Total Games Played"
          value={form.number_of_games}
        /><br/>
        <strong>Total Pinfall: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="pinfall"
          placeholder="Enter Total Pinfall"
          value={form.pinfall}
        /><br/>
        <strong>Average Score: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="average"
          placeholder="Enter Average Score"
          value={form.average}
        /><br/>
        <strong>High Score: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="high_score"
          placeholder="Enter High Score"
          value={form.high_score}
        /><br/>
        <strong>Low Score: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="low_score"
          placeholder="Enter Low Score"
          value={form.low_score}
        /><br/>
        <strong>Total Strikes: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="strikes"
          placeholder="Enter Total Strikes"
          value={form.strikes}
        /><br/>
        <strong>Total Spares: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="spares"
          placeholder="Enter Total Spares"
          value={form.spares}
        /><br/>
        <strong>Total Open Frames: </strong>
        <input
          onChange={handleFormChange}
          type="number"
          name="open_frames"
          placeholder="Enter Total Open Frames"
          value={form.open_frames}
        /><br/>
        <strong>Notes: </strong>
        <input 
          onChange={handleFormChange}
          type="text"
          name="notes"
          placeholder="Enter Any Notes"
          value={form.notes}
        /><br/>
        <button type="submit">Add New Session</button>
      </form>
    </div>
  )
}

export default SessionForm;