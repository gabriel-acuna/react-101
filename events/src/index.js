import React, { useState } from 'react';
import { render } from 'react-dom';

const Button = ()=>{
  const [counter, setCounter] = useState(0);
  return(
    <div>
      <p> Pressed: {counter}</p>
      <button style={{
        "padding":"5px",
        "backgroundColor":"steelblue",
        "fontWidth":"bold",
        "color":"whitesmoke"
      }} onClick={ev=>setCounter(counter+1)}>Click me!</button>
    </div>
  )
}
const App = ()=>{
  return(
    <div>
    <Button/>
    </div>
  )
}


render(<App />, document.getElementById('root'));
