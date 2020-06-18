import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Navbar() {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
  const { isAuth } = auth;

  return (
    <div>
      <ul>
        <li><NavLink to='/'>Discover</NavLink></li>
        {isAuth &&
        <Fragment>
          <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </Fragment>}
        {!isAuth &&
        <Fragment>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </Fragment>}
      </ul>
    </div>
  )
}
