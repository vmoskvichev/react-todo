import React from 'react'
import TodoItem from '../TodoItem';
import './List.css';

const List = ({todos, onDeleteTodo, onChangeDone}) => (
    <ul className="todo-list">
    {todos.map(({id, label, isDone}) => {
    return (
      <TodoItem 
        key={id}
        id={id} 
        label={label}
        onDeleteTodo={onDeleteTodo}
        onChangeDone={onChangeDone}
        isDone={isDone}
      />
    )
    })}
  </ul>
) 

export default List;