import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function GamesLayout() {

  const session = useSelector(state => state.session.value)

  return (
    <div>
      <h2>MY GAMES</h2>

      <nav>
        <NavLink to='games'>View All Games</NavLink>
        <NavLink to='newgame'>Add New Game</NavLink>
        <NavLink to='/mysessions/sessions'>Back to Sessions</NavLink>
      </nav>

      {/* <h3>Bowling Session on XX/XX/2023</h3> */}
      <h3>Bowling Session on {session.date}</h3>

      <Outlet />
    </div>
  )
}

export default GamesLayout;