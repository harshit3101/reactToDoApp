import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa"

const InputTodo = props => {

    const inputHandler = e=>{
        setInputTodo({
            ...InputTodo,
            [e.target.name]: e.target.value
        })
    }

    const [inputTodo, setInputTodo] = useState({
        desc: ""
    })

  return (
    <form onSubmit={e => {
        e.preventDefault();

        if(inputTodo.desc.trim()){
            props.handleChangeProps.toDoItemAdd(inputTodo);
            setInputTodo({
                ...InputTodo,
                desc:""
            });
        }else{
            alert("Empty Input Not Allowed!!")
        }
    }} className="form-container">
        <input type="text" placeholder="Add Todo..." name="desc" value={inputTodo.desc} onChange={inputHandler} className="input-text"/>
        <button className="input-submit"><FaPlusCircle /></button>
    </form>
  )
}


export default InputTodo