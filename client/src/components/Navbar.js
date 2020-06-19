import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Navbar() {
  const auth = useSelector(state => state.auth)
  const { isAuth, isLoading } = auth;

  return (
    <div>{
      !isLoading &&
      <ul>
        {isAuth &&
        <Fragment>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/add'>Add</NavLink></li>
          {auth.user.isAdmin && <li><NavLink to='/admin'>Admin</NavLink></li>}
        </Fragment>}
        {!isAuth &&
        <Fragment>
          <li><NavLink to='/login'>Login</NavLink></li>
          <li><NavLink to='/register'>Register</NavLink></li>
        </Fragment>}
      </ul>}
    </div>
  )
}
