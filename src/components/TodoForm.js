import React, {useState} from 'react';

function TodoForm({ onSubmit }) {
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className='input-element'
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a todo"
      />
      <button className="submit-btn" type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
