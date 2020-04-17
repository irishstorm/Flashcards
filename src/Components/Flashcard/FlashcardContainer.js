import React, { useState } from "react";
import styled from "@emotion/styled";
import Flashcard from "./Flashcard";
import axios from "axios";

const FlashcardContainer = (props) => {
  //    Styled
  const Container = styled.div`
    width: 800px;
    height: 400px;
    background-color: #f2f2f2;
    margin: 20px auto;
    overflow: hidden;
    border: 1px solid #2b2b2b;
  `;

  const FlashcardNavbar = styled.div`
    overflow: hidden;
    padding-top: 9px;
  `;

  let [count, setCount] = useState(0);
  let [arrayLength, setArrayLength] = useState(0);
  const [flashcard, setFlashcard] = useState({
    question: null,
    translation: null,
    hint: null,
  });

  // onClick event handler
  const handleClick = (e) => {
    e.preventDefault();
    if (count < arrayLength) {
      setCount(count + 1);
      getFlashcard(count);
    } else {
      setCount((count = 0));
      getFlashcard(count);
      setCount(count + 1);
    }
  };

  const getFlashcard = (cur) => {
    axios
      .get("http://localhost:8080/api")
      .then((res) => {
        console.log(res.data[cur]);

        setArrayLength((arrayLength = res.data.length));
        setFlashcard({
          question: res.data[cur].question,
          translation: res.data[cur].translation,
          hint: res.data[cur].hint,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Container>
        <Flashcard
          question={flashcard.question}
          translation={flashcard.translation}
          hint={flashcard.hint}
        />

        <FlashcardNavbar>
          <button
            type="button"
            className="btn btn-light btn-sm"
            onClick={(e) => handleClick(e)}
          >
            Next
          </button>
        </FlashcardNavbar>
      </Container>
    </div>
  );
};

export default FlashcardContainer;
