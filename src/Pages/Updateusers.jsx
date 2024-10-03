import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import "../App.css"

const Updateusers = () => {
    let navigate = useNavigate();
    let [values, setValues] = useState({ username: '', email: '' });
    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:2002/arr/' + id).then(response => setValues(response.data));
    }, []);

    const add = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const updatefunc = (e) => {
        e.preventDefault();
        axios.put('http://localhost:2002/arr/' + id, values).then(() => {
            navigate('/');
        });
    }

    return (
        <>
            <h1 id="update-title">Update Users To The Table</h1>
            <div className="form-container">
                <form onSubmit={updatefunc}>
                    <input type="text" className="input-field" placeholder="Enter your username" name="username" value={values.username} onChange={add} /><br />
                    <input type="email" className="input-field" placeholder="Enter your email" name="email" value={values.email} onChange={add} /><br />
                    <button type="submit" className="action-btn update-btn">Update User</button>
                </form>
            </div>
        </>
    )
}

export default Updateusers;
