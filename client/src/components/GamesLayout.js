import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GamesLayout() {

  const session = useSelector(state => state.session.value)

  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>MY GAMES</h2>
      </div>
      <br/>
      <nav className='secondaryNavBar'>
        <NavLink to='games'>View All Games</NavLink>
        <NavLink to='newgame'>Add New Game</NavLink>
        <NavLink to='/mysessions/sessions'>Back to Sessions</NavLink>
      </nav>
      <br/>
      <div className='sessionContainer'>
        <h3>Bowling Session on {session.date}</h3>
      </div>
      <br/>
      <Outlet />
    </div>
  )
}

export default GamesLayout;