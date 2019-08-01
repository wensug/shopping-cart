import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <div className='nav'>
        <p className='logo' to='/'>
          Wendy Gonzalez
        </p>
        <ul className='menu'>
          <li>
            <NavLink to='/'>Shop</NavLink>
          </li>
          <li>
            <NavLink to='/cart'>
              <i class='fas fa-shopping-cart' />
            </NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
