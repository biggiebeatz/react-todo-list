import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import  './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    if (newTodo.trim() === '') {
      throw new Error('Please enter a valid task description.');
    }
  
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  }
  

  const deleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleUpdate = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  return (
    <div className='main-container'>
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onUpdate={handleUpdate} />
    </div>
  );
}

export default App;
