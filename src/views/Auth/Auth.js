import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser } from '../../services/users';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('submitting form');
    try {
      const resp = await signInUser(email, password);
      setCurrentUser(resp.email);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form className="auth" onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
