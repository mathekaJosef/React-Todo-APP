import React, { Component } from 'react';
import TodoItem from './TodosItem';
import PropTypes from 'prop-types';

export class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} onDelete={this.props.onDelete}/>
        });
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
