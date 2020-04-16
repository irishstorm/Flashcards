import React from "react";
import styled from "@emotion/styled";
import "./App.css";
import FlashcardContainer from "./Components/Flashcard/FlashcardContainer";

function App() {
  const Brand = styled.h3`
    color: white;
  `;

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <Brand>Flashcards</Brand>
        </div>
      </nav>

      <FlashcardContainer></FlashcardContainer>
    </div>
  );
}

export default App;
