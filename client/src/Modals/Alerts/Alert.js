import React from 'react';
import { useSelector } from 'react-redux';
import './Alert.css';

export default function Alert() {
  const alert = useSelector(state => state.alert);

  const color = (alert.color === 'danger') ? 'red' : 'green'

  return (
    <div className='alert-container'>
      <div style={{backgroundColor: color}} className='alert'>
        {alert.msg}
      </div>
    </div>
  )
}
