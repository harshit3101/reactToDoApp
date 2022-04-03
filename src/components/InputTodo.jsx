import React, { useState } from 'react'
import PropTypes from 'prop-types'

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
    }}>
        <input type="text" placeholder="Add Todo..." name="desc" value={inputTodo.desc} onChange={inputHandler}/>
        <button>Submit</button>
    </form>
  )
}

InputTodo.propTypes = {}

export default InputTodo