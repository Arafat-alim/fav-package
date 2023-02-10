import React from "react";
import { Link } from "react-router-dom";

function Page404() {
  return (
    <div>
      <h1>Page 404</h1>
      <p>The Page not Found! 😓</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
}

export default Page404;
