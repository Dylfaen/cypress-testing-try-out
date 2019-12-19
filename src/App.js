import React from 'react';
import './App.css'
import TodoContainer from './containers/Todo.container';

function App() {

  

  return (
    <div className="todo-app">
      <h1 className="todo-app__title">Redux thunk todo</h1>
      <TodoContainer/>
    </div>
  );
}

export default App;
