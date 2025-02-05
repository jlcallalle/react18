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
      <TodoCounter completed={16} total={25} />

      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text} // Se usa `key` para ayudar a React a identificar cada elemento
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
