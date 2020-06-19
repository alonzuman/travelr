import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearAlert } from '../../actions';
import './Alert.css';

export default function Alert() {
  const alert = useSelector(state => state.alert);
  const dispatch = useDispatch()

  const color = (alert.color === 'danger') ? 'red' : 'green'

  return (
    <div className='alert-container'>
      <div onClick={() => dispatch(clearAlert())} style={{backgroundColor: color}} className='alert'>
          {alert.msg}
        </div>
    </div>
  )
}
