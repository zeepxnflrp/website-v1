'use client';

import { useEffect } from 'react';

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#0070f3', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
        Try again
      </button>
    </div>
  );
};

export default Error;