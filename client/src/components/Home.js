import React from 'react';

function Home() {
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
        <p>Email Login: <strong>ron@gmail.com</strong> || Password: <strong>1234</strong></p>
        <p>Email Login: <strong>ej@gmail.com</strong> || Password: <strong>1234</strong></p>
        <p>Email Login: <strong>pete@gmail.com</strong> || Password: <strong>1234</strong></p>
        </div>
    </div>
  )
}

export default Home;