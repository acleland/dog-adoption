import React from 'react';
import './DogForm.css';

export default function DogForm({ dog, setDog, handleSubmit }) {
  const minAge = 0;
  const maxAge = 100;

  const updateDog = (key, value) => {
    const newDog = { ...dog, [key]: value };
    setDog(newDog);
  };

  return (
    <form className="dog-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" value={dog.name} onChange={(e) => updateDog('name', e.target.value)} />
      </label>
      <label>
        Age
        <input
          type="number"
          min={minAge}
          max={maxAge}
          value={dog.age}
          onChange={(e) => updateDog('age', e.target.value)}
        />
      </label>
      <label>
        Breed
        <input type="text" value={dog.breed} onChange={(e) => updateDog('breed', e.target.value)} />
      </label>
      <label>
        Image URL
        <input type="text" value={dog.image} onChange={(e) => updateDog('image', e.target.value)} />
      </label>
      <label htmlFor="bio">Bio</label>
      <textarea
        name="bio"
        rows="5"
        cols="33"
        value={dog.bio}
        onChange={(e) => updateDog('bio', e.target.value)}
      ></textarea>

      <button>Submit</button>
    </form>
  );
}
