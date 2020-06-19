import React, { useEffect } from 'react';
import Spinner from '../../components/Spinner';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, makeAdmin, removeAdmin } from '../../actions';

export default function User() {
  const { id } = useParams();
  const { isLoading, user} = useSelector(state => state.admin);
  const currentUser = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser(id))
  }, [])

  return (
    <div>
      {isLoading && <Spinner />}
      {!isLoading &&
      <div>
        <h1>{user.firstName} {user.lastName}</h1>
          {currentUser && (currentUser._id !== user._id) &&
          <div>{!user.isAdmin ?
          <button onClick={() => dispatch(makeAdmin(user._id))}>Make admin</button> :
          <button onClick={() => dispatch(removeAdmin(user._id))}>Remove Admin</button> }</div>
          }
      </div>}
    </div>
  )
}
