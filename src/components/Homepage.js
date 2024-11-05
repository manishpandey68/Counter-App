import React, { useState } from 'react';

export default function Homepage() {
  const [count, setCount] = useState(0);

  // Function for increasing the count
  let handleCount = () => {
    setCount(count + 1);
  };

    // Function for resetting the count to zero
  let handleReset = () => {
    setCount(0);
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-5 shadow-lg" style={{ width: '300px', textAlign: 'center' }}>
        <h1 className="display-5 mb-4">Counter App</h1>

        <p className="display-4 mb-4">{count}</p>

        <button 
          className="btn btn-primary btn-lg w-100" 
          onClick={handleCount}
        >
          Increase Count
        </button>

        <button 
          className="btn btn-primary btn-lg w-100 my-3" 
          onClick={handleReset}
        >
          Reset Count
        </button>
      </div>
    </div>
  );
}
