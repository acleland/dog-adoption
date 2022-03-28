import React from 'react';
import { useState, useEffect } from 'react';
import DogCard from '../../components/DogCard/DogCard';
import DogList from '../../components/DogList/DogList';
import { getDogs } from '../../services/dogs';

export default function Home() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDogs();
        setDogs(data);
      } catch (e) {
        console.log('oh noes, errorr');
        console.log(e);
      }
    };
    getData();
  }, []);

  console.log(dogs[0]);
  return (
    <div>
      <h1>Adopt-a-Dog</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
