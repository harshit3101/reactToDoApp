import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

/*
{
    id:1,
    desc: 'Today i will do this',
    completed: true
}
*/
class TodoContainer extends React.Component {

    
    state = {
        toDoList: [
            {
                id: uuidv4(),
                desc: 'Today i will do this 2',
                completed: true
            }
        ],
    };


    handleToDoListChange = {
        toDoItemCheckbox: e => {
            this.setState(prevState => ({
                toDoList: prevState.toDoList.map(item => {
                    if(item.id === e) {
                        return {
                            ...item,
                            completed: !item.completed
                        }
                    }else{
                        return  item;
                    }
                })
            }))
        },
        toDoItemDelete: (id) => {
            this.setState(prevState => ({
                toDoList: prevState.toDoList.filter(item => item.id !== id)
            }))
        },
        toDoItemAdd: item=> {
            this.setState(
                prevState => ({
                    toDoList: [...prevState.toDoList, {...item, id: uuidv4()}]
                })
            )
        }
    }


    render() {
        return (
            <>
                <Header />
                <InputTodo handleChangeProps={this.handleToDoListChange}/>
                <TodosList 
                toDoList={(this?.state?.toDoList || [])}
                handleChangeProps={this.handleToDoListChange}
                />
            </>
        )
    }
}

export default TodoContainer