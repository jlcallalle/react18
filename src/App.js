// import logo from './react.png';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'item 1', completed: true },
  { text: 'imte 2', completed: false },
  { text: 'imte 3', completed: false },
  { text: 'item 4', completed: false },
];

function App() {
  return (
    <React.Fragment>
       {/* <div className="App"> */}
       <div className="todo-container">
        <TodoCounter completed={16} total={25} className="todo-counter" />
        <TodoSearch className="todo-search" />
        <TodoList className="todo-list">
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            />
          ))}
        </TodoList>
        <CreateTodoButton className="create-todo-button" />
       </div>
    </React.Fragment>
  );
}

export default App;

