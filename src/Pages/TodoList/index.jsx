import React, { useState } from 'react';
import Form from '../../components/Form';
import TodoItem from '../../components/TodoItem';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 777, label: '12312', isDone: false },
    ]);

    const setStatus = (id) => {
        const copy = [...todos];
        const idx = copy.findIndex((item) => item.id === id);
        copy[idx].isDone = !copy[idx].isDone;
        setTodos(copy);
    };

    const deleteTodo = (id) => {
        const idx = todos.findIndex((item) => item.id === id);
        setTodos([...todos.slice(0, idx), ...todos.slice(idx + 1)]);
    };

    const addTodo = (label) => {
        setTodos([...todos, { id: Date.now(), label, isDone: false }]);
    };

    return (
        <div className="wrap">
            <Form onAddTodo={addTodo} />
            <ul className="todo-list">
                {todos.map(({ id, label, isDone }) => (
                    <TodoItem
                        key={id}
                        id={id}
                        label={label}
                        onDeleteTodo={deleteTodo}
                        onSetStatus={setStatus}
                        isDone={isDone}
                    />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
