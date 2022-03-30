import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDogById } from '../../services/dogs';

export default function DogDetail() {
  const params = useParams();
  const id = params.id;

  const [dog, setDog] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDogById(id);
        setDog(data);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, [id]);

  if (error) {
    return <p>Oh golly gee, we have an error</p>;
  }

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <div className="dog-detail">
      <h1>{dog.name}</h1>
      <img src={dog.image} />
      <div>
        <ul>
          <li>Age: {dog.age}</li>
          <li>Breed: {dog.breed}</li>
          <li>Bio: {dog.bio}</li>
        </ul>
      </div>
    </div>
  );
}
