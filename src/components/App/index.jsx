import React, {useState, useEffect} from "react";
import { renderRoutes } from "react-router-config";
import './App.css';
import Form from '../Form';
import { TokenContext } from '../../tokenContext';
// import Login from "../Login";
// import List from "../List";
// import AppRoute from "../AppRoute";



function App({ route }) {
  const [todos, setTodos] = useState([{id: 777, label: '12312', isDone: false}]);
  const [token, setToken] = useState('');

  console.log(route)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const isAuthenticated = token;

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
    console.log(todos)
    const copy = [...todos]
    const idx = copy.findIndex(item => item.id === id);
    copy[idx].isDone = !copy[idx].isDone;
    setTodos(copy)
  }

  return (
    <TokenContext.Provider value={isAuthenticated}>
      <div className="App">
        <Form 
          onAddTodo={addTodo}
        />
          { renderRoutes(route.routes) }
      </div>
    </TokenContext.Provider>
  );
}

export default App;
