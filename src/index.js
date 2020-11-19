import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import { PrivateRoute, UnPrivateRoute } from "./components/AppRoutes";
import TodoList from './Pages/TodoList';
import MainLayout from './components/MainLayout';


const routes = [  
  {
    component: App,
    routes: [
      {
        path: "/login",
        exact: true,
        component: UnPrivateRoute(Login) 
      },

      {
        path: "/",
        component: PrivateRoute(MainLayout), 


        routes: [
          {
            exact: true,
            path: "/todo_list",
            component: TodoList
          },
          {
            exact: true,
            path: "/",
            component: () => <div>MAIN PAGE</div>
          },
          {
            path: "/",
            component: () => <div>404</div>
          }
        ]
      },
      

    ]
  }
]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { renderRoutes(routes) }
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
