import React, { Component } from 'react'
import Todos from './Todos'
import Header from './Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import About from './About'

export class TodoApp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos: [
                 {
                     id: 1,
                     title: "item 1",
                     isCompleted: false
                 },
                 {
                    id: 2,
                    title: "item 2",
                    isCompleted: false
                },
                {
                    id: 3,
                    title: "item 3",
                    isCompleted: false
                }
             ]
        }
    }

    handleComplete = (id) => {
        this.setState({todos: this.state.todos.map(item => {
            if(item.id === id){
                item.isCompleted = !item.isCompleted
            }
            return item
        })})
    }

    handleDelete = (id) => {
        this.setState({todos: this.state.todos.filter(item => item.id !== id)})
    }
    
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Route path="/" exact render={props => (
                        <React.Fragment>
                            {
                                this.state.todos.map(item => {
                                    return <Todos 
                                            key={item.id} 
                                            todo={item} 
                                            OnComplete={this.handleComplete}
                                            OnDelete={this.handleDelete}
                                        />
                                })
                            }
                        </React.Fragment>
                    )} />

                    <Route path="/about" component={About} />
                </div>
            </Router>
        )
    }
}

export default TodoApp
