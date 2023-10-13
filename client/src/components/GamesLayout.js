import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';

function GamesLayout({session}) {

  // Redux method
  // const session = useSelector(state => state.session.value)

  // Convert Ruby datetime to formatted datetime on app
  const month = (session.date ? session.date.substring(5, 7) : '');
  const day = (session.date ? session.date.substring(8, 10) : '');
  const year = (session.date ? session.date.substring(0, 4) : '');
  const date = (!session.date || session.date.includes('-') ? `${month}/${day}/${year}` : session.date);

  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>MY GAMES</h2>
      </div>
      <br/>
      <nav className='secondaryNavBar'>
        <NavLink to=''>View All Games</NavLink>
        <NavLink to='new'>Add New Game</NavLink>
        <NavLink to='/mysessions'>Back to Sessions</NavLink>
      </nav>
      <br/>
      <div className='sessionContainer'>
        <h3>Bowling Session on {date}</h3>
      </div>
      <br/>
      <Outlet />
    </div>
  )
}

export default GamesLayout;