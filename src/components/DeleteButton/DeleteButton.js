import React from 'react';
import { useState } from 'react';

export default function DeleteButton({ onClick }) {
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <span>
      <button onClick={setShowConfirm(true)}>Delete</button>
      You sure? <button onClick={onClick}>Yes</button>
      {showConfirm && <button onClick={setShowConfirm(false)}>Cancel Delete</button>}
    </span>
  );
}
