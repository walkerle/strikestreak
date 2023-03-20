// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const [user, setUser] = useState(null);
  // const [errors, setErrors] = useState(false)

  // Verifies cookies and sessions middleware is working, comment out for final product
  const [count, setCount] = useState(0);

  useEffect(() => { // Verifies cookies and sessions middleware is working, comment out for final product
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, []);

  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE"
    })
    .then(res => {
      if(res.ok) {
        // navigate("/login")
        setUser(null);
        console.log("Logged out")
      }
    })
  }

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>

      {/* <h3>{user.email}</h3> */}
      <Signup setUser={setUser} />
      <Login setUser={setUser} />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default App;
