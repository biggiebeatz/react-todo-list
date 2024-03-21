import React, { useState } from 'react';

function TodoItem({ todo, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleComplete = () => {
    onUpdate({ ...todo, completed: !todo.completed });
  };

  const handleDelete = () => {
    onDelete();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate({ ...todo, text: editedText });
    setIsEditing(false);
  };

  return (
    <li className='todo-list'>
      {isEditing ? (
        <input
          className='input-edit'
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      )}
      <button className='btn'onClick={handleComplete}>{todo.completed ? 'Undo' : 'Complete'}</button>
      <button className='btn' onClick={handleEdit}>Edit</button>
      {isEditing && <button className='btn' onClick={handleSave}>Save</button>}
      <button className='btn' onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
