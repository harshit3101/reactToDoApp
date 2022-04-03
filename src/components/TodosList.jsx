import React, { Component } from 'react'
import ToDoItem from './ToDoItem'

class TodosList extends Component {
  render() {

    return (
      <ul>
        {this.props.toDoList.map(todo => (
          <ToDoItem 
          key={todo.id} 
          todo={todo}
          handleChangeProps={this.props.handleChangeProps}
          />
        ))}
      </ul>
    )
  }
}

export default TodosList