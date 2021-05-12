import React, { useState } from 'react';
import '../Layouts/New.css'

const NewTaskItem = ({ onSubmit }) => {

  const [newItem, setNewItem] = useState('');

  function setNewTask({target}) {
    setNewItem(target.value);
  }

  function submit(e) {
    e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="O que vamos fazer hoje?"
          onChange={setNewTask}
          className="Todo-Form"
        />
        <button className="Todo-btn" type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )
};

export default NewTaskItem;