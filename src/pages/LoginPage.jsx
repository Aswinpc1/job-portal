import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

  
    if (email === 'admin@example.com' && password === 'admin123') {
      alert('Admin Login Successful');
      navigate('/home'); // Ideally to /admin-dashboard
    } else if (email === 'user@example.com' && password === 'user123') {
      alert('User Login Successful');
      navigate('/home'); // Ideally to /user-dashboardgit init

    } else {
      alert('Invalid credentials');
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email: </label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div style={{ marginTop: '10px' }}>
          <label>Password: </label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
