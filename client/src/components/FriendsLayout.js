import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function FriendsLayout() {
  return (
    <div>
      <h2>FRIENDS LIST</h2>

      <nav>
        <NavLink to='myfriends'>My Friends</NavLink>
        <NavLink to='findfriend'>Find a Friend</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default FriendsLayout;