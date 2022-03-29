import React from 'react';
import { Link } from 'react-router-dom';
import DogCard from '../DogCard/DogCard';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div className="dog-list">
      {dogs.map((dog) => (
        <Link key={dog.id} to={`/dogs/${dog.id}`}>
          <DogCard key={dog.id} {...dog} />
        </Link>
      ))}
    </div>
  );
}
