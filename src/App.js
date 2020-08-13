import React from 'react';
import LoginButton from './components/Authentication/logInButton.js';
import Logout from'./components/Authentication/logoutButton.js';
import Header from './components/header/';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
    <LoginButton />
    <Logout />
    <Header />
    <Footer />
    </div>
  );
}

export default App;
