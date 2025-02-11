// import logo from './react.png';
import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import './App.css';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'item 1', completed: true },
  { text: 'imte 2', completed: false },
  { text: 'imte 3', completed: false },
  { text: 'item 4', completed: false },
  { text: 'item 5', completed: true },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(
    todo => !!todo.completed
  ).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <>
       {/* <div className="App"> */}
       <div className="todo-container">
        {/* <TodoCounter completed={16} total={25} className="todo-counter" /> */}
        <TodoCounter
          completed={completedTodos}
          total={totalTodos} 
          className="todo-counter"
      />
        {/* <TodoSearch className="todo-search" /> */}
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          className="todo-search"
        />
        {/* <TodoList className="todo-list">
          {defaultTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              className={`todo-item ${todo.completed ? "completed" : ""}`}
            />
          ))}
        </TodoList> */}
        <TodoList>
        {searchedTodos.map(todo => (
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
    </>
  );
}

export default App;

