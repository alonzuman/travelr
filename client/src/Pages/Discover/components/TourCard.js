import React from 'react';
import { Link } from 'react-router-dom';

export default function TourCard({tour}) {
  return (
    <Link to={`/tours/${tour.id}`}>
      <div>{tour.title}</div>
    </Link>
  )
}
