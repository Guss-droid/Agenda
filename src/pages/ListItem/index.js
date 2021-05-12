import React from 'react';
import '../Layouts/ListItem.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas)

const ListItem = ({ onChange, onDelete, value }) => {
  return (
    <div className="Item-container">
      <input
        className="Item-field"
        value={value}
        onChange={onChange}
        readOnly
      />
      <button className="Item-btn" onClick={onDelete}><FontAwesomeIcon icon="trash-alt" /></button>
    </div>
  );
};

export default ListItem;