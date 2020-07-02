import React, { useState} from 'react';
import './App.css';
import Home from './containers/Home';
import Admin from './containers/Admin';

export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useState('');

  return (
    <div className='App'>
      {token ? (
        <TokenContext.Provider value={{setToken:setToken}}>
          <Admin />
        </TokenContext.Provider>
      ) : (
        <TokenContext.Provider value={{setToken:setToken}}>
          <Home />
        </TokenContext.Provider  >
      )}
    </div>
  );
}

export default App;
