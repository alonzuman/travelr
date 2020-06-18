import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/Spinner';

export default function Login() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const { isLoading, isAuth } = auth

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    dispatch(login(user))
  }

  if (isAuth) {
    return <Redirect to='/' />
  } else {
    return (
      <form onSubmit={handleSubmit}>
        {isLoading && <Spinner />}
        <div className='form-group'>
          <label>Email Address</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type='email' required />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input value={password} onChange={e => setPassword(e.target.value)} type='password' required />
        </div>
        <div className='form-group'>
          <button type='submit'>Log In</button>
        </div>
      </form>
    )
  }
}
