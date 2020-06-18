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
        {isAuth &&
        <Fragment>
          <li><NavLink to='/'>Home</NavLink></li>
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
