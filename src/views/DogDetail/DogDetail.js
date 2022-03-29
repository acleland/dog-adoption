import React from 'react';
import { useParams } from 'react-router-dom';

export default function DogDetail() {
  const params = useParams();
  const id = params.id;

  return <div>DogDetail: {id}</div>;
}
