import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Link to="/users/arafat">Arafat</Link>
      <Link to="/users/asif">Asif</Link>
    </div>
  );
}

export default About;
