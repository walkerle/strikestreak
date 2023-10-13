import React, { useState } from 'react';

function SessionFormEdit({session, onUpdateSession}) {
  // Need to store session in cookies or other, so data is retained on REFRESH!
  // localStorage?

  // Initial datetime datatype for form data - Using UTC datetime get methods
  const dateInst = new Date(session.date);
  // Convert Date instance to string
  const initialDate = `${dateInst.getUTCFullYear()}-${(dateInst.getUTCMonth()+1 < 10 ? `0${dateInst.getUTCMonth()+1}` : dateInst.getUTCMonth()+1)}-${(dateInst.getUTCDate() < 10 ? `0${dateInst.getUTCDate()}` : dateInst.getUTCDate())}`;

  // Initial form data
  const initialForm = {
    ...session,
    date: initialDate
  }
  
  // React state(s)
  const [form, setForm] = useState(initialForm);
  
  // Event Handler: Make controlled inputs
  const handleFormChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // Event Handler: Make date a controlled input
  const handleDateChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  
  // Event Handler: Add Session
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    onUpdateSession(form);
    
    setForm(session);
  }

  // Convert Ruby datetime to formatted datetime on app
  const month = (session.date ? session.date.substring(5, 7) : '');
  const day = (session.date ? session.date.substring(8, 10) : '');
  const year = (session.date ? session.date.substring(0, 4) : '');
  const date = (!session.date || session.date.includes('-') ? `${month}/${day}/${year}` : session.date);

  return (
    <div>
      <div className='sessionContainer'>
        <h3>Update Bowling Session on {date}</h3>
      </div>
      <br/>
      <div className='sessionForm'>
        <form onSubmit={handleFormSubmit}>
          <strong>Date: </strong>
          <input 
            onChange={handleDateChange}
            type="date"
            name="date"
            min="2023-01-01"
            max="2024-12-31"
            value={form.date}
          />
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
            minLength="0"
            maxLength="100"
            size="105"
          /><br/><br/>
          <button type="submit" className='addButton'>Update Session</button>
        </form>
      </div>
    </div>
  )
}

export default SessionFormEdit;