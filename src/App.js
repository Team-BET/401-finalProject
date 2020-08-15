import React from "react";
import { Provider } from "react-redux";
import LoginButton from "./components/Authentication/logInButton.js";
import Logout from "./components/Authentication/logoutButton.js";
import Header from "./components/header/";
import Footer from "./components/footer";
import Song from "./components/getSong/song";
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <LoginButton />
        <Header />
        <Song />
        <Footer />
        <Logout />
      </div>
    </Provider>
  );
}

export default App;
