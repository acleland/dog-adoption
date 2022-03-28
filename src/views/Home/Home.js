import React from 'react';
import { useState, useEffect } from 'react';
import DogList from '../../components/DogList/DogList';
import { getDogs } from '../../services/dogs';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (e) {
        setError(e);
      }
    };
    getData();
  }, []);

  if (error) {
    return <p>Oh golly gee, we have an error</p>;
  }
  return (
    <div>
      <h1>Adopt-a-Dog</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
