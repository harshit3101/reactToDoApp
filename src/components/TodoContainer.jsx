import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";
import "../css/App.css"

/*
{
    id:1,
    desc: 'Today i will do this',
    completed: true
}
*/
class TodoContainer extends React.Component {

    
    state = {
        toDoList: [],
    };


    parseToDoResponseFromJsonPalceHolder(data){
        return {
            id: uuidv4(),
            desc: data.title,
            completed: data.completed
        }
    }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/todos?_limit=6")
        // .then(res => res.json())
        // .then(data => {
        //     this.setState(prevState => ({
        //         toDoList: [...(
        //             data.map(eachItem => {
        //                 return this.parseToDoResponseFromJsonPalceHolder(eachItem);
        //             })
        //         )]
        //     }))
        // })

        this.setState(prevState => ({
            toDoList: JSON.parse(localStorage.getItem("toDoList")) || []
        }));


    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.toDoList !== this.state.toDoList) {
            localStorage.setItem("toDoList", JSON.stringify(this.state.toDoList))
        }
    }

    handleToDoListChange = {
        toDoItemCheckbox: e => {
            this.setState(prevState => ({
                toDoList: prevState.toDoList.map(item => {
                    if(item.id === e) {
                        item.completed = !(item.completed || false);
                    }
                    return item;
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
                    toDoList: [...prevState.toDoList, {...item, id: uuidv4(), completed: false}]
                })
            )
        },
        toDoItemUpdate: (id, updatedDesc) => {
            this.setState(prevState => ({
                toDoList: prevState.toDoList.map(item => {
                    if(item.id === id) {
                        item.desc = updatedDesc;
                    }
                    return  item;
                })
            }))
        }
    }


    render() {
        return (
            <div className="container">
                <div className="inner">
                    <Header />
                    <InputTodo handleChangeProps={this.handleToDoListChange}/>
                    <TodosList 
                    toDoList={(this?.state?.toDoList || [])}
                    handleChangeProps={this.handleToDoListChange}
                    />
                </div>
            </div>
        )
    }
}

export default TodoContainer