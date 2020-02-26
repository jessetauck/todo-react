import React from "react";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Things to do</h1>
      </header>
      <div className="list">
        You should create your list here...
        <br />
        <br />
        The user should be able to:
        <li>Add tasks</li>
        <li>Remove tasks</li>
        <li>Edit tasks</li>
        <li>Complete tasks</li>
      </div>
    </div>
  );
}

export default App;
