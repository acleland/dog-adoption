import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDogById } from '../../services/dogs';
import DogForm from '../../components/DogForm/DogForm';
import { updateDog } from '../../services/dogs';
import { useHistory } from 'react-router-dom';

export default function Edit() {
  const params = useParams();
  const id = params.id;
  const [dog, setDog] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDogById(id);
        setDog(data);
        setLoading(false);
      } catch (e) {
        setError(e.message);
      }
    };
    getData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(dog);
      history.push(`/dogs/${id}`);
    } catch (e) {
      setError(e.message);
    }
  };

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <h1>Edit</h1>
      <DogForm {...{ dog, setDog, handleSubmit }} />
    </div>
  );
}
