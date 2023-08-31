import React, { useState } from 'react';

function SessionFormEdit({session, onUpdateSession}) {
  // Need to store session in cookies or other, so data is retained on REFRESH!
  // localStorage?

  // React state(s)
  const [form, setForm] = useState(session);

  // Event Handler: Make controlled inputs
  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

   // Event Handler: Add Session
   const handleFormSubmit = (e) => {
    e.preventDefault();
    
    onUpdateSession(form);
    
    setForm(session);
  }

  return (
    <div>
      <div className='sessionContainer'>
        <h3>Update Bowling Session on {form.date}</h3>
      </div>
      <br/>
      <div className='sessionForm'>
        <form onSubmit={handleFormSubmit}>
          <strong>Date: </strong>{form.date}
          <br/>
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
          <button type="submit" className='addButton'>Update Session</button>
        </form>
      </div>
    </div>
  )
}

export default SessionFormEdit;