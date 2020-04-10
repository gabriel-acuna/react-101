import React from 'react';
import {render} from 'react-dom';
const names = [
  'Gabo',
  'Mary',
  'Jessy',
  'José',
];

const NamesList = ()=>{
  return(
    <ul>
      {
        names.map((name, index)=><li key={index}>{name}</li>)
      }
    </ul>
  )

};
const Saludo = (props)=>{
  const lang = "en";
  return (
    <div>
    {
      lang === "en" ? <p>Hi {props.name}, How you doing?</p>:  <p>Hola {props.name}, ¿Cómo estás?</p>
    }
     

    </div>
  );
}
const App = ()=>{
  return(
    <div>
    
      <Saludo name={'Gabo'}/>

      <NamesList/>
    </div>
  );
};

render(<App />,document.getElementById("root"));