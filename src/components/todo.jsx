import React, { Component } from 'react';
import Todolist from './todolist';

export class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            todoValue: "",
             todos: ['todo1','todo2','todo3','todo4']
        }
    }

    handleInput = (event) => {
        this.setState({todoValue: event.target.value});
    }

    addTodo = () => {
        let todos = this.state.todos;
        todos.push(this.state.todoValue);
        this.setState({todos});
    }

    handleDelete = (id) => {
        let todosSample = this.state.todos;
        let todoRemove = this.state.todos[id];
        let finalTodoList = todosSample.splice(todoRemove, 1);
        console.log(finalTodoList);

        this.setState({todos: finalTodoList});
    }

    
    
    render() {
        return (
            <div className="container m-4">
                <h4>Todo App</h4>
                <Todolist todo={this.state} onDelete={this.handleDelete}/>
                <input style={{width: 200}} type="text" className="form-control" value={this.state.todoValue} onChange={this.handleInput}/>
                <button className="btn btn-info btn-sm m-2" onClick={this.addTodo}>+</button>
            </div>
        )
    }
}

export default TodoApp
