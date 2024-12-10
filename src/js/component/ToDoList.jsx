import React, { useState } from "react";

export const ToDoList = () => {

    const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);
    
    const tareasPendientes = () => {
        if (todos.length === 0){
            return "No hay tareas pendientes, añadir tareas"
        }else{
            return todos.length + " tareas pendientes"
        }
    }

    

    return(

        <div className="card">
        <h1 className="card-header fs-1 fw-bold">Mis Tareas: {inputValue} </h1>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <input
                    className="fs-4"
                    type="text"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            setTodos(todos.concat([inputValue]));
                            setInputValue("");
                        }
                    }}
                    placeholder="¿Qué tienes que hacer?"></input>
            </li>
            {todos.map((item, index) => (
                
                <li key={index} className="mt-2 list-group-item d-flex justify-content-between align-items-start fs-4">
                    {item}{" "}
                    <i
                        className="fas fa-trash-alt"
                        onClick={() =>
                            setTodos(
                                todos.filter(
                                    (item, currentIndex) =>
                                        index != currentIndex
                                )
                            )
                        }
                    ></i>                    
                </li>
            ))}
        
        </ul>
        <div className="me-2 mt-2 text-secondary text-end fst-italic">

        {tareasPendientes()}

        </div>
        
        </div>  
    )
}

