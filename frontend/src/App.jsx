import React, { useState, useCallback } from 'react';
import Home from './pages/Home.jsx';
import { LoadingScreen } from './components/LoadingScreen.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={handleFinishLoading} />}
      <Home />
    </>
  );
}

export default App;

