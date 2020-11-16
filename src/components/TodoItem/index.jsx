import React, {useState} from 'react';
import './TodoItem.css';

const TodoItem = ({onDeleteTodo, onChangeDone, label, id, isDone}) => {
    console.log(isDone)
    return (
        <li className="todo-item">
          <p className={isDone ? "isDone" : ''}>{label}</p>
          <div className="todo-item-actions">
            <input value={isDone} onChange={() => onChangeDone(id)} type="checkbox"/>
            <button onClick={() => onDeleteTodo(id)} className="delete-btn">delete</button>
          </div>
        </li>
      )
}

export default TodoItem;