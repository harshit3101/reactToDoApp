import React from 'react'


function ToDoItem(props) {
  return (
    <li>
    <input name="completed" type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps.toDoItemCheckbox(props.todo.id)}/> {props.todo.desc}
    <br></br>
    <button onClick={() => props.handleChangeProps.toDoItemDelete(props.todo.id)}> Delete </button>
    </li>
  )
}

export default ToDoItem
