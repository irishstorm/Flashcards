import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateFlashcard from "../Flashcard/Crud/CreateFlashcard";

const WordList = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row">
      <div className="col-sm-6">
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.question}</h3>
            <p>{post.translation}</p>
          </div>
        ))}
      </div>

      <div className="col-sm-4">
        <CreateFlashcard></CreateFlashcard>
      </div>
    </div>
  );
};

export default WordList;
