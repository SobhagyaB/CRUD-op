import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../App.css"

const Addusers = () => {
    let navigate = useNavigate();
    let [values, setValues] = useState({ username: '', email: '' });

    const add = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const adduser = (e) => {
        e.preventDefault();
        axios.post('http://localhost:2002/arr', values).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <h1 id="add-title">Add Users To The Table</h1>
            <div className="form-container">
                <form onSubmit={adduser}>
                    <input type="text" className="input-field" placeholder="Enter your username" name="username" value={values.username} onChange={add} /><br />
                    <input type="email" className="input-field" placeholder="Enter your email" name="email" value={values.email} onChange={add} /><br />
                    <button type="submit" className="action-btn add-btn">Add User</button>
                </form>
            </div>
        </>
    )
}

export default Addusers;
