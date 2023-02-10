import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function NoFav() {
  return (
    <div className="nofav">
      <h2>You dont have any favourite Yet! Please Add</h2>
      <Button>
        <Link to="/addFav" className="link">
          Add Fav
        </Link>
      </Button>
    </div>
  );
}

export default NoFav;
