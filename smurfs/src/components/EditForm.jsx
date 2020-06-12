import React from "react";
import { useContext } from "react";
import { SmurfContext } from "./context/SmurfContext";
import { useState } from "react";
import axios from "axios";

const EditForm = props => {

    const [smurfs, setSmurfs, isEditing, setIsEditing] = useContext(SmurfContext);
    const [value, setValue] = useState({
        name: props.name,
        height: props.height,
        age: props.age,
    });

    const onChangeHandler = event => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    
    const onEdit = e => {
        e.preventDefault();

        axios.put(`http://localhost:3333/smurfs/${props.id}`, value)
        .then(res => {
            setSmurfs(res.data);
            setIsEditing(false);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <form className="edit form" className={props.id} onSubmit={onEdit}>
            <input
                onChange={onChangeHandler}
                placeholder="Name"
                name="name"
                type="text"
                value={value.name}
            />
            <input
                onChange={onChangeHandler}
                placeholder="Age"
                name="age"
                type="text"
                value={value.age}
            />
            <input
                onChange={onChangeHandler}
                placeholder="Height"
                name="height"
                type="text"
                value={value.height}
            />
            <button className="button" type="submit" onClick={onEdit}>Submit</button>
        </form>
    )
}

export default EditForm;