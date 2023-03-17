// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState(null);
  // const [errors, setErrors] = useState(false)

  // Verifies cookies and sessions middleware is working
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Page Count: {count}</h1>

      <Signup user={user} setUser={setUser} />
      <Login user={user} setUser={setUser} />
    </div>
  );
}

export default App;
