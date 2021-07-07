import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Contact Contact Book
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="btn btn-outline-success" to="/contacts/add">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
