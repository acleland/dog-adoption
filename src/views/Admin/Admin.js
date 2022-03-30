import React, { useState } from 'react';
import DogForm from '../../components/DogForm/DogForm';

export default function Admin() {
  const [dog, setDog] = useState();

  return (
    <div>
      <h1>Add a new dog</h1>
      <DogForm {...{ dog, setDog }} />
    </div>
  );
}
