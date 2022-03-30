import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import DogForm from '../../components/DogForm/DogForm';
import { createDog } from '../../services/dogs';

export default function Admin() {
  const [dog, setDog] = useState({ name: '', age: 0, breed: '', bio: '', image: '' });
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDog(dog);
      history.push('/');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Add a new dog</h1>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
