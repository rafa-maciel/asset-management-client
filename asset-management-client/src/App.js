import React, { useEffect, useState } from 'react';
import AuthToken from './adapters/AuthToken/index.js';
import HomePage from './pages/commons/home/HomePage/HomePage.jsx';
import AuthenticationPage from './pages/commons/security/AuthenticationPage/AuthenticationPage.jsx';

function App() {
  const [authenticated, setAuthenticated] = useState(false)
  const [logoutRedirect, setLogoutRedirect] = useState(false)

  useEffect(() => {
    const authToken = new AuthToken()
    if (!authenticated && authToken.hasValidToken()) { 
      setAuthenticated(true)
    }
    
    if (authenticated && !authToken.hasValidToken())
      setAuthenticated(false)

    if (authenticated)
      runTimeoutLogout(authToken.milesecondsToExpireToken())

  }, [authenticated, logoutRedirect])

  const runTimeoutLogout = expirationTime => {
    setTimeout(() => {
      console.log("logging out due to session expired")
      setLogoutRedirect(true)}, expirationTime)
  }

  const CurrentPage = () => {
    if (authenticated)
      return <HomePage />
    else
      return <AuthenticationPage onSuccessAuthenticated={() => setAuthenticated(true)} redirectedFromLogout={ logoutRedirect }/>
  }

  return (
    <CurrentPage />
  );
}

export default App;
