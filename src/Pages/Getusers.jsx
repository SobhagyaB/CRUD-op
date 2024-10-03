import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "../App.css"

const Getusers = () => {
    let [state, setState] = useState([]);
    let [thead, setThead] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:2002/arr').then(result => {
            setState(result.data);
            setThead(Object.keys(result.data[3]).slice(0, 4));
        }).catch(err => console.log(err));
    }, [state]);

    let addUser = () => {
        navigate('/adduser');
    }

    let deleting = (id) => {
        axios.delete('http://localhost:2002/arr/' + id).then(() =>
            navigate('/'))
    }

    return (
        <table id="crud-table">
            <caption id="crud-caption">
                <strong>CRUD operations</strong> &nbsp;
                <button id="add-btn" onClick={addUser}>Add</button>
            </caption>
            <thead>
                <tr>
                    {thead.map((x, index) => <th key={index} className="table-header">{x}</th>)}
                    <th className="table-header">Operations</th>
                </tr>
            </thead>
            <tbody>
                {state.map((res, index) => {
                    return (
                        <tr key={index} className="table-row">
                            <td className="table-data">{res.id}</td>
                            <td className="table-data">{res.name}</td>
                            <td className="table-data">{res.username}</td>
                            <td className="table-data">{res.email}</td>
                            <td className="table-data">
                                <Link to={`/updateuser/${res.id}`}>
                                    <button className="action-btn update-btn">Update</button>
                                </Link> &nbsp; &nbsp;
                                <button className="action-btn delete-btn" onClick={() => deleting(res.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    )
}

export default Getusers;
