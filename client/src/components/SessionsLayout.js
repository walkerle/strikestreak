import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function SessionsLayout() {
  return (
    <div>
      <h2>MY SESSIONS</h2>

      <nav>
        <NavLink to='sessions'>View All Sessions</NavLink>
        <NavLink to='newsession'>Add New Session</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default SessionsLayout;