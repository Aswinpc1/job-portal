import React from 'react';
import Navbar from './Navbar';


function LandingPage() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Welcome to Job Portal</h1>
        <p>Find your dream job or post one if you're hiring!</p>
      </div>
    </div>
  );
}

export default LandingPage;
