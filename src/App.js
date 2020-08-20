import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Song from "./components/getSong/song";
import "./index.css";
import Footer from "./components/footer";
import { About } from "./About";
import store from "./store";
import Home from "./components/home";
import SongLoading from "./components/songLoading/songLoading.js";
import Result from "./components/results";
import { Jumbotron } from "./components/Jumbotron";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/navigationBar/NavigationBar.js";

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
              <Route path="/Songloading" component={SongLoading} />
              <Route path="/about" component={About} />
              <Route path="/Song" component={Song} />
              <Route path="/Result" component={Result} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </Provider>
    </React.Fragment>
  );
}

export default App;
