import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/addTodo';
import About from './components/pages/about';
import uuid from 'uuid';

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       todos: [
         {
           id: uuid.v4(),
           title: "wake up",
           completed: false
         },
         {
          id: uuid.v4(),
          title: "take shower",
          completed: true
        },
        {
          id: uuid.v4(),
          title: "brush teeth",
          completed: false
        },
       ]
    }
  }
  
  //toggle complete
  markComplete = (id) => {
    // console.log(id);
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  handleDelete = (id) => {
    // console.log(id);
    this.setState({todos: [...this.state.todos.filter(todo => {
      return todo.id !== id;
    })]})

  }

  handleTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
     this.setState({todos: [...this.state.todos, newTodo]});
  }

  render() {

    console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.handleTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} onDelete={this.handleDelete}/>
              </React.Fragment>
            )}/>
            <Route path="/about" component={About}/>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
