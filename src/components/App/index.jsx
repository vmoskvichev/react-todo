import React, {useState, useEffect} from "react";
import { renderRoutes } from "react-router-config";
import './App.css';
import { TokenContext } from '../../tokenContext';


function App({ route }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    setToken(localStorage.getItem('token'))
  }, [])

  const tokenContext = {
    token
  }

  return (
    <TokenContext.Provider value={tokenContext}>
      <div className="App">
          { renderRoutes(route.routes) }
      </div>
    </TokenContext.Provider>
  );
}

export default App;
