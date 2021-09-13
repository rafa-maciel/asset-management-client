import { React, useEffect, useState } from 'react';
import AuthToken from './adapters/AuthToken/index.js';
import HomePage from './pages/home/HomePage/HomePage.jsx';
import AuthenticationPage from './pages/security/AuthenticationPage/AuthenticationPage.jsx';

function App() {
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    const authToken = new AuthToken()
    if (!authenticated && authToken.hasValidToken())
      setAuthenticated(true)
    
    if (authenticated && !authToken.hasValidToken())
      setAuthenticated(false)
  }, [authenticated])

  const CurrentPage = () => {
    if (authenticated)
      return <HomePage />
    else
      return <AuthenticationPage onSuccessAuthenticated={() => setAuthenticated(true)}/>
  }

  return (
    <CurrentPage />
  );
}

export default App;
