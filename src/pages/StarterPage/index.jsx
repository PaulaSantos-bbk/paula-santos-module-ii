import React from "react";
//import "./StarterPage.css";
import "../Styles.css";

const StarterPage = () => (
  <div className="container">
    <div className="hero-starter">
      <h1 className="h1">I'm the starter!!!</h1>
    </div>
    <div className="ingredients">
      <h2>Ingredients</h2>
      <div className="ingredients-list">
        <p>ingredient one</p>
        <p>ingredient two</p>
        <p>ingredient three</p>
      </div>
    </div>
    <div className="method">
      <h2>Method</h2>
      <div className="method-list">
        <p>step one</p>
        <p>step two</p>
        <p>step three</p>
      </div>
    </div>
  </div>
);

export default StarterPage;
