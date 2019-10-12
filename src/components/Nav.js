import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active-link' to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName='active-link' to='/private'>Private</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Nav;