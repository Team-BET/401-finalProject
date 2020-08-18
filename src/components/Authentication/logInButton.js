import React, {usrState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = (props) => {
  const { loginWithRedirect, isAuthenticated,user} = useAuth0();
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
