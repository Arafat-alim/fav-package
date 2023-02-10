import React from "react";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <div>
      <h1>Error 404</h1>
      <h2>Oops! No Page Found</h2>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default Error404;
