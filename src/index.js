import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';


ReactDOM.render(
  <Auth0Provider
    domain ={'dev-kn2wabk9.us.auth0.com'}
    clientId ={'Sp3ZoRJgUouM07SAvA4GD2VerTaCAN5y'}
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>,
    document.getElementById('root')
);

