import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import FlashcardContainer from "./Components/Flashcard/FlashcardContainer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import WordList from "./Components/Wordlist/WordList";
import ToDo from "./Components/Dev/DevToDoList";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/flashcards" component={FlashcardContainer} />
          <Route path="/wordlist" component={WordList} />
          <Route path="/todo" component={ToDo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
