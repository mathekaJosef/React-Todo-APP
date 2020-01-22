import React, { Component } from 'react'

export class TryInput extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username: "",
             comment: "",
             topic: "Vue"
        }
    }
    //username, comments, topic
    handleUsername = (event) => {
        this.setState({username: event.target.value});
        // console.log(this.state.username);
    }
    handleComments = (event) => {
        this.setState({comment: event.target.value});
    }
    handleTopic = (event) => {
        this.setState({topic: event.target.value});
    }
    checkSubmit = () => {
        alert(`${this.state.username}, ${this.state.comment}, ${this.state.topic}`);
    }
    
    render() {
        return (
            <div>
                <form action="" className="m-4" onSubmit={this.checkSubmit}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input style={{width:300}} type="text" className="form-control m-2" placeholder="username" value={this.state.username} onChange={this.handleUsername}/>
                    </div>
                    <div>
                        <label htmlFor="comment">Comments</label>
                        <textarea name="" id="" style={{width:300}} className="form-control m-2" cols="30" rows="10" placeholder="comment" value={this.state.comment} onChange={this.handleComments}></textarea>
                    </div>
                    <div>
                        <label htmlFor="topic">Topic</label>
                        <select style={{width:300}} name="" id="" className="form-control m-2" value={this.state.topic} onChange={this.handleTopic}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>
                    <div>
                        <button className="btn btn-info btn-sm m-2">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TryInput
