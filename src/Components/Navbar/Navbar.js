import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

function Navbar() {
  const Brand = styled.h3`
    color: white;
  `;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <Brand>Flashcards</Brand>
        </div>

        <ul className="navbar-nav">
          <Link to="/">
            <li className="nav-item active">
              <span className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </span>
            </li>
          </Link>

          <Link to="/flashcards">
            <li className="nav-item">
              <span className="nav-link" href="/flashcards">
                Flashcards
              </span>
            </li>
          </Link>

          <Link to="/wordlist">
            <li className="nav-item">
              <span className="nav-link">WordList</span>
            </li>
          </Link>

          <Link to="/todo">
            <li className="nav-item">
              <span className="nav-link" href="/todo">
                TODO
              </span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
