import React, {useState} from "react";
import './App.css';
import Form from '../Form';
import TodoItem from '../TodoItem';

function App() {
  const [todos, setTodos] = useState([{id: 777, label: '12312', isDone: false}]);

  const deleteTodo = (id) => {
    const idx = todos.findIndex(item => item.id === id);
    setTodos(
      [
        ...todos.slice(0, idx),
        ...todos.slice(idx + 1)
      ]
    )
  }

  const addTodo = (label) => {
      setTodos(
          [
            ...todos, 
            {id: Date.now(), label, isDone: false}
          ]
      )
  }

  const changeDone = (id) => {
    const copy = [...todos]
    const idx = copy.findIndex(item => item.id === id);
    copy[idx].isDone = !copy[idx].isDone;
    return copy
  }

  return (
    <div className="App">
      <Form 
        onAddTodo={addTodo}
      />

      <ul className="todo-list">
        {todos.map(({id, label, isDone}) => {
         return (
          <TodoItem 
          key={id}
            id={id} 
            label={label} 
            onDeleteTodo={deleteTodo}
            onChangeDone={changeDone}
            isDone={isDone}
          />
         )
        })}
      </ul>
    </div>
  );
}

export default App;
