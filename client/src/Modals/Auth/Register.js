import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, setAlert } from '../../actions';
import { Redirect } from 'react-router-dom';
import Spinner from '../../components/Spinner';

export default function Register() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const { isLoading, isAuth } = auth;

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email, firstName, lastName, password,
    }
    if (password === password2) {
      dispatch(register(user));
    } else {
      dispatch(setAlert({ msg: 'Passwords don\'t match, please try again', color: 'danger' }))
    }
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
          <label>Approve Password</label>
          <input value={password2} onChange={e => setPassword2(e.target.value)} type='password' required />
        </div>
        <div className='form-group'>
          <label>First Name</label>
          <input value={firstName} onChange={e => setFirstName(e.target.value)} type='password' required />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input value={lastName} onChange={e => setLastName(e.target.value)} type='password' required />
        </div>
        <div className='form-group'>
          <button type='submit'>Register</button>
        </div>
      </form>
    )
  }
}
