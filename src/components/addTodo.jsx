import React, { Component } from 'react'

export class AddTodo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             title: ''
        }
    }
    
    addInput = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <form action="" style={{display: 'flex'}} onSubmit={this.handleSubmit}>
                <input 
                    style={{flex: '10', padding: '5px'}}
                    type="text" 
                    name="title" 
                    placeholder="Add Todo..."
                    value={this.state.title}
                    onChange={this.addInput}
                />

                <input 
                    type="submit" 
                    name="submit" 
                    className="btb"
                    value="Submit"
                    style={{flex: '1'}}
                />
            </form>
        )
    }
}

export default AddTodo
