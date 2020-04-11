import React, { useContext } from 'react';
import { FormContext } from './Form';

export default () => {
    const context = useContext(FormContext);
    const addItem = (value, list)=>context.setLikes([value].concat(context.likes));
    const removeItem = (value, list)=>context.setLikes(context.likes.filter(v=> v!=value));

    console.log(context.likes);
    return (
        <div className="form-section">
            <label>
                <input type="checkbox" name="likes[]" 
                onChange={(ev)=> ev.target.checked ? addItem('Java'): removeItem('Java')} />
                Java
           </label>

            <label>
                <input type="checkbox" name="likes[]" 
                onChange={(ev)=> ev.target.checked ? addItem('Python'): removeItem('Python')}/>
                Python
           </label>
        </div>
    )
}