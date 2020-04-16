import React, { useState } from "react";
import axios from "axios";

const CreateFlashcard = (props) => {
  const [postQuestion, setPostQuestion] = useState("");
  const [postTranslation, setPostTranslation] = useState("");
  const [postHint, setPostHint] = useState("");

  const Handler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/save", {
        question: postQuestion,
        translation: postTranslation,
        hint: postHint,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch();
  };

  return (
    <div className="container">
      <form onSubmit={Handler}>
        <div className="form-group">
          <input
            value={postQuestion}
            onChange={(e) => {
              setPostQuestion(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter a Question"
          />
        </div>

        <div className="form-group">
          <input
            value={postTranslation}
            onChange={(e) => {
              setPostTranslation(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter a Translation"
          />
        </div>

        <div className="form-group">
          <input
            value={postHint}
            onChange={(e) => {
              setPostHint(e.target.value);
            }}
            type="text"
            className="form-control"
            placeholder="Enter a Hint"
          />
        </div>

        <button className="btn btn-dark btn-sm">Submit</button>
      </form>
    </div>
  );
};

export default CreateFlashcard;
