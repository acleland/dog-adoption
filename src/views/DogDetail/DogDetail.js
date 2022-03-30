import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getDogById } from '../../services/dogs';
import { deleteById } from '../../services/dogs';
import { useHistory } from 'react-router-dom';
// import DeleteButton from '../../components/DeleteButton/DeleteButton';

export default function DogDetail({ currentUser }) {
  const params = useParams();
  const id = params.id;

  const [dog, setDog] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleDelete = async () => {
    await deleteById(id);
    history.push('/');
  };

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
      {currentUser && (
        <div>
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {/* <DeleteButton /> */}
        </div>
      )}
    </div>
  );
}
