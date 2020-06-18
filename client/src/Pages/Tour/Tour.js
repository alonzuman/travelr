import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTour } from '../../actions';

export default function Tour() {
  const { id } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTour(id))
  }, [])

  return (
    <div>
      {id}
    </div>
  )
}
