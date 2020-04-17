import React from "react";

const DevToDoList = (props) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card">
          <div class="card-header">To Do List</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Make a blog to keep track of current learning
            </li>
            <li className="list-group-item">Dynamic routing for blog posts</li>
          </ul>
        </div>
      </div>

      <div className="div col-sm-4">
        <div class="card">
          <div class="card-header">Features</div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Flashcards</li>
            <li class="list-group-item">Vocabulary</li>
            <li class="list-group-item">Verbs</li>
            <li class="list-group-item">Blog</li>
            <li class="list-group-item">Quiz</li>
          </ul>
        </div>
      </div>

      <div className="div col-sm-4">
        <div class="card">
          <div class="card-header">Finished ToDo</div>
          <ul class="list-group list-group-flush">
            <li className="list-group-item">
              <strike>
                Iterate thru the json file by using the next button
              </strike>
            </li>
            <li className="list-group-item">
              <strike>Fix out of bounds exception</strike>
            </li>

            <li className="list-group-item">
              <strike>
                [Bug] sets current count to zero twice when iteration is at zero
              </strike>
            </li>
            <li className="list-group-item">
              <strike>Setup Node with mongoose and insert Dummy Data</strike>
            </li>
            <li className="list-group-item">
              <strike>Fetch data from mongoose and display in react</strike>
            </li>
            <li className="list-group-item">
              <strike>Add Data from react to mongoose</strike>
            </li>
            <li className="list-group-item">
              <strike>[bug] Fix controlled input ending when typing</strike>
            </li>
            <li className="list-group-item">
              <strike>Add Page Routing using react-router</strike>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DevToDoList;
