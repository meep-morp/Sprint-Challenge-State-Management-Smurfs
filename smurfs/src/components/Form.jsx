import React from "react";
import { useContext } from "react";
import { SmurfContext } from "./context/SmurfContext";
import { useState } from "react";
import Axios from "axios";

const Form = props => {

    const [smurfs, setSmurfs] = useContext(SmurfContext);
    const [value, setValue] = useState({
        name: "",
        height: "",
        age: ""
    });

    const onChangeHandler = event => {
        setValue({ ...value, [event.target.name]: event.target.value })
    }

    const onSubmitHandler = event => {
        event.preventDefault();

        Axios.post(`http://localhost:3333/smurfs`, value)
            .then(res => {
                console.log(res);
                setSmurfs(res.data);
            })
            .catch(err => {
                console.log(err);
            })

        setValue({
            name: "",
            height: "",
            age: ""
        });
    }

    return (
        <form className="form" onSubmit={onSubmitHandler}>
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
            <button className="button" type="submit" >Enter Village</button>
        </form>
    )
}

export default Form;