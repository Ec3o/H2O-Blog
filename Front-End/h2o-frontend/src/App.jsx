import React from 'react';
import Navbar from './components/NavBar'; // 确保路径正确
import './index.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl">Welcome to the Blog!</h1>
      </div>
    </div>
  );
}

export default App;