import React, { Component } from 'react'

export class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    componentDidMount = () => {
        fetch('https://swapi.co/api/people/1', {mode: "no-cors"})
        .then(response => response.json())
        .then(data => console.log(data))
        
    }
    
    render() {
        return (
            <div>
                <h4>Code here</h4>
            </div>
        )
    }
}

export default Test
