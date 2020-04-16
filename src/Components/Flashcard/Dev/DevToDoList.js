import React from "react";
import styled from "@emotion/styled";

const DevToDoList = (props) => {
  const Todo = styled.div`
    border: 1px solid black;
    width: 400px;
    top: 76px !important;
    right: 20px;
    z-index: 1;
    position: absolute;
    padding-top: 20px;
    text-align: left;
  `;

  const TodoHeader = styled.h4`
    text-align: center;
  `;

  return (
    <div>
      <Todo>
        <TodoHeader>Todo List</TodoHeader>
        <ul>
          <li>
            <strike>Iterate thru the json file by using the next button</strike>
          </li>
          <li>
            <strike>Fix out of bounds exception</strike>
          </li>

          <li>
            <strike>
              [Bug] sets current count to zero twice when iteration is at zero
            </strike>
          </li>
          <li>
            <strike>Setup Node with mongoose and insert Dummy Data</strike>
          </li>
          <li>
            <strike>Fetch data from mongoose and display in react</strike>
          </li>
          <li>
            <strike>Add Data from react to mongoose</strike>
          </li>
          <li>
            <strike>[bug] Fix controlled input ending when typing</strike>
          </li>
        </ul>
      </Todo>
    </div>
  );
};

export default DevToDoList;
