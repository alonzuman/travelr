import React, { useEffect } from 'react';
import { getTopTours } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import TourCard from './components/TourCard';

export default function Discover() {
  const dispatch = useDispatch();
  const tours = useSelector(state => state.tours);

  useEffect(() => {
    dispatch(getTopTours())
  }, [])

  return (
    <div>
      {tours.tours.map(tour => <TourCard tour={tour} key={tour.id} />)}
    </div>
  )
}
