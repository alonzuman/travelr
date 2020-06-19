import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddJob from '../../Modals/AddJob/AddJob';
import { Redirect } from 'react-router-dom';

export default function Add() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [])

  if (auth.isAuth) {
    return (
      <div>
        Add Page
        <AddJob />
      </div>
    )
  } else {
    return <Redirect to='/login' />
  }
}
