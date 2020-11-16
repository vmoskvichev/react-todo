import React from 'react';
import './TodoItem.css';

const TodoItem = ({onDeleteTodo, onChangeDone, label, id, isDone}) => {

    return (
        <li className="todo-item">
          <span >{label}</span>
          <div className="todo-item-actions">
            <button onClick={() => onDeleteTodo(id)} className="delete-btn">delete</button>
            <input value={isDone} onChange={() => onChangeDone(id)} type="checkbox"/>
          </div>
        </li>
      )
}

export default TodoItem;