import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const SmurfContext = createContext();


export const SmurfProvider = props => {
    const [smurfs, setSmurfs] = useState([]);
    const [isEditing, setIsEditing] = useState(false);

    return (
        <SmurfContext.Provider value={[smurfs, setSmurfs, isEditing, setIsEditing]}>
            {props.children}
        </SmurfContext.Provider>
    )
}