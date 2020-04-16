import React from "react";
import styled from "@emotion/styled";

const Flashcard = (props) => {
  const FlashcardMainText = styled.div`
    height: 350px;
    padding-top: 150px;
    overflow: hidden;
    border-bottom: 1px solid #2b2b2b;
  `;
  return (
    <div>
      <FlashcardMainText>
        <h1>{props.question}</h1>
        <h4>{props.translation}</h4>
      </FlashcardMainText>
    </div>
  );
};

export default Flashcard;
