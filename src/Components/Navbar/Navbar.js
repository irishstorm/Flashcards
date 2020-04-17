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

        <ul class="navbar-nav">
          <Link to="/">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
          </Link>

          <Link to="/flashcards">
            <li class="nav-item">
              <a class="nav-link" href="/">
                Flashcards
              </a>
            </li>
          </Link>

          <Link to="/wordlist">
            <li class="nav-item">
              <a class="nav-link" href="/">
                WordList
              </a>
            </li>
          </Link>

          <Link to="/todo">
            <li class="nav-item">
              <a class="nav-link" href="/">
                TODO
              </a>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
