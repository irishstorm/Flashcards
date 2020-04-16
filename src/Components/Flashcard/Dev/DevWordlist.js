import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import CreateFlashcard from "../Crud/CreateFlashcard";

const DevWordlist = (props) => {
  const Wordlist = styled.div`
    border: 1px solid black;
    width: 400px;
    top: 76px !important;
    left: 20px;
    z-index: 1;
    position: absolute;
    padding-top: 10px;
  `;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api")
      .then((res) => {
        //console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wordlist>
      <CreateFlashcard></CreateFlashcard>

      <br></br>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.question}</h3>
          <p>{post.translation}</p>
        </div>
      ))}
    </Wordlist>
  );
};

export default DevWordlist;
