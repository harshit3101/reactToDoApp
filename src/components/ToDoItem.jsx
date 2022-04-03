import React from 'react'
import styles from "../css/ToDoItem.module.css"
import { useState ,useEffect} from 'react'
import { FaTrash } from "react-icons/fa"


function ToDoItem(props) {


  useEffect(() => {
    return () => { console.log("IT triggered")}
  }, [])
  


  let viewMode = {}
  let editMode = {}

  
  const [editing, setEditing] = useState(false)

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const { completed, id, desc } = props.todo


  const handleEditing = (e)=>{
    setEditing(true)
  }

  if (editing) {
    viewMode.display = "none"
  } else {
    editMode.display = "none"
  }

  const handleUpdateDone = (e)=>{
    if(e.key === "Enter"){
      setEditing(false);
    }
  }


  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input className={styles.checkbox} name="completed" type="checkbox" checked={completed} 
         onChange={() => props.handleChangeProps.toDoItemCheckbox(id)}/>
        <button onClick={() => props.handleChangeProps.toDoItemDelete(id)}> <FaTrash /> </button>
        <span style={completed ? completedStyle: null}>{desc}</span>
      </div>
      <input 
      type="text" 
      style={editMode} 
      className={styles.textInput} value={desc}
      onChange={e=>{
        props.handleChangeProps.toDoItemUpdate(id, e.target.value)
      }}
      onKeyDown={handleUpdateDone}
      ></input>
    </li>
  )
}

export default ToDoItem
