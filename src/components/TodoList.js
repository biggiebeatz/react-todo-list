import React from 'react';
import TodoItem from './TodoItem';
function TodoList({ todos, onDelete, onUpdate }) {
  return (
    <ul className='todo-container'>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onUpdate={(updatedTodo) => onUpdate(updatedTodo)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
