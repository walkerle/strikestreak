import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function SessionsLayout() {
  return (
    <div>
      <br/>
      <div className='Headers'>
        <h2>MY SESSIONS</h2>
      </div>
      <br/>
      <nav className='secondaryNavBar'>
        <NavLink to=''>View All Sessions</NavLink>
        <NavLink to='new'>Add New Session</NavLink>
      </nav>
      <br/>
      <Outlet />
    </div>
  )
}

export default SessionsLayout;