import React, { Component } from 'react'

export class Todolist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo: this.props.todos
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.props.todo.todos.map((value, key) => {
                        return <div key={key} className="card m-2" onClick={() => this.props.onDelete(key)}><div className="card-body">{value}</div></div>
                    })
                }
            </div>
        )
    }
}

export default Todolist
