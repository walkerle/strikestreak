import React, { useState } from 'react';

function Home() {
  const dateInst = new Date(Date.now());
  // console.log('dateInst:', dateInst);
  
  // console.log('=====================================');
  // console.log('UTC DATE:');
  // console.log('dateInst.getUTCMonth()+1:', dateInst.getUTCMonth()+1);
  // console.log('dateInst.getUTCDate() (day of month):', dateInst.getUTCDate()); // day of month
  // console.log('dateInst.getUTCFullYear():', dateInst.getUTCFullYear());
  // console.log('UTCDate YYYY-MM-DD:', `${dateInst.getUTCFullYear()}-${dateInst.getUTCDate()}-${dateInst.getUTCMonth()+1}`);
  // console.log('dateInst.getUTCHours():', dateInst.getUTCHours());
  // console.log('=====================================');
  // console.log('LOCAL DATE:');
  // console.log('dateInst.getMonth()+1:', dateInst.getMonth()+1);
  // console.log('dateInst.getDate() (day of month):', dateInst.getDate()); // day of month
  // console.log('dateInst.getFullYear():', dateInst.getFullYear());
  // console.log('UTCDate YYYY-MM-DD:', `${dateInst.getFullYear()}-${dateInst.getDate()}-${dateInst.getMonth()+1}`);
  // console.log('dateInst.getHours():', dateInst.getHours());
  // console.log('=====================================');
  
  const initialDate = `${dateInst.getFullYear()}-${dateInst.getDate()}-${dateInst.getMonth()+1}`; // Convert Date instance to string
  // console.log('initialDate:', initialDate);
  // console.log('=====================================');

  // React state
  const [date, setDate] = useState(initialDate); // Format: YYYY-MM-DD string

  const handleDateChange = (e) => {
    console.log('Date change:', e.target.value);
    console.log('Date change typeof:', typeof e.target.value);
    setDate(e.target.value);
  }
  
  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>Welcome to Strike Streak!</h2>
      </div>
      <br/>
      <div className='homeMessage'>
        <h3>Track your bowling progress, compare your stats against friends, have fun!</h3>
      </div>
      <br/>
      <div className='homeMessage'>
        <h3>For Application Demonstration:</h3>
        <p>Seed data has been added to demonstrate using this application, see below example login credentials.</p>
        <h4>Seed Data Login Credentials:</h4>
        <p>Email Login: <strong>walker@gmail.com</strong> || Password: <strong>1234</strong></p>
        <p>Email Login: <strong>ej@gmail.com</strong> || Password: <strong>1234</strong></p>
        <p>Email Login: <strong>pete@gmail.com</strong> || Password: <strong>1234</strong></p>
        </div>
        {/* <br/>
        <div>
          <label><strong>Datetime Test: </strong></label>
          <input
            type="date"
            name="date"
            min="2023-01-01"
            max="2024-12-31"
            onChange={handleDateChange}
            value={date}
            required
          />
        </div> */}
    </div>
  )
}

export default Home;