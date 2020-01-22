import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodosItem extends Component {
    
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',

            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }   

    render() {

        const {id, title} = this.props.todo;
        let p_completed = {
            fontStyle: "italic",
            color: "#cdcdcd"
        }

        return (
            <div style={this.getStyle()}>
                <p style={this.props.todo.completed ? p_completed : null}>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {'  '}
                    {title}
                    <button style={btnStyle} onClick={() => this.props.onDelete(id)}>x</button>
                </p>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '3px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

//PropTypes 
TodosItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodosItem

//invest on idea assumption, feedbacks, critcs.
//cellulant
//value prepositions
//thunkable
//


