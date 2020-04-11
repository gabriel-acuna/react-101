import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Card from './components/Card';
import Form from './components/Form';
const themes = {
  'dark': {
    backgroundColor: 'black',
    color: 'white'
  },
  'light': {
    backgroundColor: 'white',
    color: 'black'
  }
}

export const ThemeContext = React.createContext();



function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <div className="App">
      <ThemeContext.Provider value={theme}>
        <Button />
        <button onClick={() => setTheme(themes.light)}>Ligth Theme</button>
        <button onClick={() => setTheme(themes.dark)}>Dark Theme</button>
        <Card/>
        <Form/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
