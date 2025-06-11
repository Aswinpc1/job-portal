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
    // <div style={{ padding: '20px' }}>
    //   <h2>Login</h2>
    //   <form onSubmit={handleLogin}>
    //     <div>
    //       <label>Email: </label><br />
    //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </div>
    //     <div style={{ marginTop: '10px' }}>
    //       <label>Password: </label><br />
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     </div>
    //     <button type="submit" style={{ marginTop: '10px' }}>Login</button>
    //   </form>
    // </div>
      <div className="min-h-screen bg-gradient-to-br from-[#1b1f61] to-[#3c1f94] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm">
        <div className="bg-[#2f2f90] rounded-t-2xl py-6 text-center">
          <h2 className="text-white text-2xl font-bold">Sign In</h2>
        </div>
        <div className="p-8">
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none"
            />
            <div className="text-right text-sm text-gray-500">
              Forgot{' '}
              <a href="#" className="text-[#3c1f94] font-medium hover:underline">
                Username / Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#3c1f94] text-white py-3 rounded-full font-semibold hover:bg-[#2f2f90] transition"
            >
              SIGN IN
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-6">
            Don’t have an account?{' '}
            <a href="#" className="text-[#3c1f94] font-semibold hover:underline">
              SIGN UP NOW
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
