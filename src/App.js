import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import LoginButton from "./components/Authentication/logInButton.js";
// import Logout from "./components/Authentication/logoutButton.js";
import Song from "./components/getSong/song";

import Footer from "./components/footer";
//import Song from "./components/getSong/song";
import { About } from "./About";
import store from "./store";
import Home from "./Home";
import Stuff from "./Stuff";
import { Jumbotron } from "./components/Jumbotron";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Stuff" component={Stuff} />
              <Route path="/about" component={About} />
              <Route path="/Song" component={Song} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;

// ---- OLd Codes -------//

// import React from "react";
// import { Provider } from "react-redux";
// import LoginButton from "./components/Authentication/logInButton.js";
// import Logout from "./components/Authentication/logoutButton.js";
// import Header from "./components/header/";
// import Footer from "./components/footer";
// import Song from "./components/getSong/song";
// import store from "./store";

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <LoginButton />
//         <Header />
//         <Song />
//         <Footer />
//         <Logout />
//       </div>
//     </Provider>
//   );
// }

// export default App;
