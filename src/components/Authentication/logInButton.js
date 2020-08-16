import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated,} = useAuth0();
  console.log(loginWithRedirect)
  return(
    !isAuthenticated && (
    <div>
      <p onClick={ () => loginWithRedirect()}>
        Log In
      </p>
    </div>
  )    
  )
}

export default LoginButton;