import React, { useEffect, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../actions';
import Spinner from '../../components/Spinner';

export default function Admin() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const admin = useSelector(state => state.admin);
  const { isLoading, users } = admin

  useEffect(() => {
    dispatch(getAllUsers());
    console.log(admin.users)
  }, []);

  if (auth.isAuth) {
    return (
      <Fragment>
        {isLoading && <Spinner />}
        {!isLoading &&
        <div>
          Admin Panel
          <ul>
            {users && users.map(user => (
              <Link to={`/users/${user._id}`}>
                <li key={user._id}>{user.email}</li>
              </Link>
            ))}
          </ul>
        </div>}
      </Fragment>
    )
  } else {
    return <Redirect to='/' />
  }
}
