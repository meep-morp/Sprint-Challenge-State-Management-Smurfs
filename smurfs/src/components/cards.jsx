import React from "react";
import axios from "axios";
import { useContext } from "react";
import { SmurfContext } from "./context/SmurfContext";
import { useEffect } from "react";
import EditForm from "./EditForm";
import { useState } from "react";

const Cards = props => {

    const [smurfs, setSmurfs, isEditing, setIsEditing] = useContext(SmurfContext);


    useEffect(() => {
        axios.get(`http://localhost:3333/smurfs`)
            .then(res => {
                setSmurfs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const onDelete = id => {
        axios.delete(`http://localhost:3333/smurfs/${id}`)
            .then(res => {
                setSmurfs(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="cards">
            <h1>Smurfs Roll Call!</h1>
            {isEditing 
            ? <button className="button" onClick={() => setIsEditing(false)}>Done</button> 
            : <p className="button" onClick={() => setIsEditing(true)}>Edit</p>}
            {smurfs.map(smurf => (
                <div className="card">
                    <h2>{smurf.name}</h2>
                    <h2>Height: {smurf.height}</h2>
                    <h2>Age: {smurf.age}</h2>
                    {isEditing ? <EditForm 
                    id={smurf.id}
                    name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    /> : ""}
                    <p className="button" onClick={() => onDelete(smurf.id)}>X</p>
                </div>
            ))}
        </div>
    )
}

export default Cards;