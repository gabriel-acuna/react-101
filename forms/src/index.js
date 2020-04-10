import React, { useState, useEffect, useRef } from 'react';
import { render } from 'react-dom';
import './style.css';
const input_form ={
  "padding":"15px 30px"
};
const Form = ({showed})=>{

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const firstInput = useRef('');
  useEffect(()=>{
    firstInput.current.focus();
  },
  [showed]
  );

  const sendForm = (ev)=>{
    ev.preventDefault();
    alert(`New post \nTitle: ${title}\n Body:${body} `);
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body,
      userId: 1
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => {
    console.log(json);
    setTitle('');
    setBody('');
    })
  };
  return(
    <form onSubmit={(ev)=> sendForm(ev)}>
      <div style={input_form}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={ev=>setTitle(ev.target.value)} value={title} required ref={firstInput}/>
      </div>
      <div style={input_form}>
        <label htmlFor="body">Body</label>
        <textarea id="body" value={body} onChange={ev=>setBody(ev.target.value)} required>
        </textarea>
      </div>
      <div style={input_form}>
        <button type="submit">Enviar</button>
      </div>
    </form>
  )
}

const Accordion = ()=>{
  const [show, setShow] = useState(false);
  return(
    <div>
        <button onClick={ev=>setShow(true)}>Show form</button>
        {show && <Form showed={show}/>}
    </div>
  )

}

const App = ()=>{
  return(
    <div>
      <Accordion/>
    </div>
  )
}

render(<App />, document.getElementById('root'));
