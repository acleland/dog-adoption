import React from 'react';
import './DogCard.css';
export default function DogCard(dog) {
  return (
    <div className="dog-card">
      <h2>{dog.name}</h2>
      <img src={dog.image} />
    </div>
  );
}
