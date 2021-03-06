import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ onDeleteTodo, onSetStatus, label, id, isDone }) => {
	return (
		<li className='todo-item'>
			<p className={isDone ? 'isDone' : ''}>{label}</p>
			<div className='todo-item-actions'>
				<input
					value={isDone}
					onChange={() => onSetStatus(id)}
					type='checkbox'
				/>
				<button onClick={() => onDeleteTodo(id)} className='delete-btn'>
					delete
				</button>
			</div>
		</li>
	);
};

export default TodoItem;
