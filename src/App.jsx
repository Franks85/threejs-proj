import React, { Suspense } from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber';

function App() {
  return (
    <div className='App'>
      <Canvas>
        <Suspense fallback={null}></Suspense>
      </Canvas>
    </div>
  );
}

export default App;
