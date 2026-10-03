import React, { useState } from 'react';
import Home from './pages/Home.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      <Home />
    </>
  );
}

export default App;

