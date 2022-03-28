import React from 'react';
import DogCard from '../DogCard/DogCard';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <DogCard key={dog.id} {...dog} />
      ))}
    </div>
  );
}
