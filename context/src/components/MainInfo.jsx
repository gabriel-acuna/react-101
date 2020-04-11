import React, { useContext } from 'react';
import { FormContext } from './Form';

export default () => {
    const context = useContext(FormContext);

    return (
        <div className="form-section">
            <div>
                <label>Email</label>
                <input type="email" value={context.email} onChange={(ev)=>context.setEmail(ev.target.value)} />

            </div>

            <div>
                <label>Password</label>
                <input type="password" value={context.password}  onChange={(ev)=>context.setPassword(ev.target.value)} />
            </div>
        </div>
    )
}