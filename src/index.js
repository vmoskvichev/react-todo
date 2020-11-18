import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import List from './components/List';
import Login from './components/Login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from "react-router-config";
import TodoList from './Pages/TodoList';


const isAuthorized = true;


function PrivateRoute(WrappedComponent){
  return (props) => isAuthorized? <WrappedComponent {...props}/> : <div>THIS IS REDIRECT 1</div>
  }

  function UnPrivateRoute(WrappedComponent){
    return (props) => isAuthorized?  <div>THIS IS REDIRECT 2</div> : <WrappedComponent {...props}/>
    }
      


function MainLayout ({route}) {


  return <div> 
    THIS IS MAIN LAYOUT


{renderRoutes(route.routes)}

  </div>
} 

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
            path: "/todo_list",
            exact: true,
            component: TodoList
          },
          {
            component: ()=><div>404</div>
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
