import React, { Component } from 'react';

export class InputText extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Name',
             surname: 'Surname',
             address: 'Address'
        }
    }

    handleName = (event) => {
        this.setState({name: event.target.value});
    }

    handleSurname= (event) => {
        this.setState({surname: event.target.value});
    }

    handleAddress= (event) => {
        this.setState({address: event.target.value});
    }

    handleSubmit = () => {
        alert(`${this.state.name}, ${this.state.surname}, ${this.state.address},`);
    }
    
    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" style={{width: 300}} className="form-control m-4" value={this.state.name} onChange={this.handleName}/>
                </div>
                <div>
                    <input type="text" style={{width: 300}} className="form-control m-4" value={this.state.surname} onChange={this.handleSurname}/>
                </div>
                <div>
                    <input type="text" style={{width: 300}} className="form-control m-4" value={this.state.address} onChange={this.handleAddress}/>
                </div>
                <div>
                    <button name="submit" type="submit" className="btn btn-primary btn-sm ml-4">Submit</button>
                </div>
            </form>
        )
    }
}

export default InputText;
