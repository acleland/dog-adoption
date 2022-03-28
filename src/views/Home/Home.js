import React from 'react';
import { useState, useEffect } from 'react';
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
  return <div>Home</div>;
}
