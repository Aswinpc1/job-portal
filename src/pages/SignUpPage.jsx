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
    // <div style={{ padding: '20px' }}>
    //   <h2>Signup</h2>
    //   <form onSubmit={handleSignup}>
    //     <div>
    //       <label>Email: </label><br />
    //       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    //     </div>
    //     <div style={{ marginTop: '10px' }}>
    //       <label>Password: </label><br />
    //       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
    //     </div>
    //     <button type="submit" style={{ marginTop: '10px' }}>Signup</button>
    //   </form>
    // </div>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 p-4">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-2">Sign up</h2>
        <p className="text-sm text-gray-500 text-center mb-6">Sign up to continue</p>
        
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600 text-sm">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300"
          >
            Sign up
          </button>
        </form>

        <div className="text-center text-sm mt-4 text-gray-500">ACCESS QUICKLY</div>
        <div className="flex justify-between mt-4 space-x-2">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-1/3 hover:bg-blue-50">
            Google
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-1/3 hover:bg-blue-50">
            LinkedIn
          </button>
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded w-1/3 hover:bg-blue-50">
            SSO
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
