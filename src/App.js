import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import {
  HomePage,
  StarterPage,
  MainPage,
  DessertPage,
  ContactPage,
} from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/starter" component={StarterPage} />
      <Route path="/main" component={MainPage} />
      <Route path="/dessert" component={DessertPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>

    /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> 
    */
  );
}

export default App;
