import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    alert(`Account created for ${email}`);
    navigate('/login');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password: </label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
