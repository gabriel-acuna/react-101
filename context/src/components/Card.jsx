import React, { useContext } from 'react';
import {ThemeContext} from '../App.js';

export default ()=>{
    const context = useContext(ThemeContext);
    return (
        <div style={{
            backgroundColor: context.backgroundColor,
            color: context.color,
            padding:'20px',
            margin: '20px auto',
            width:'80%',
            display:'block',
            borderRadius:'10px',
            border:'gray solid 3px'
        }}>
            My card
        </div>
    )
    
}