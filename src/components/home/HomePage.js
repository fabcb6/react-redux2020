import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Home Page</h1>
    <p>home page description</p>
    <Link to="about" className="btn btn-primary btn-lg">
      About
        </Link>
  </div>
);

export default HomePage;
