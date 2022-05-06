import React, { useState } from "react";
import './App.css';
import './App.scss';
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import Homepage from './component/content/homepage/Homepage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import About from "./component/pages/About";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />

         
          <Switch>
            <Route path="/about">
              <About />
            </Route>

            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
        </div>
      </Router>


      <Footer />
    </div>
  );
}

export default App;
