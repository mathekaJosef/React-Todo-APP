import React, { Component } from 'react'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <div className="navbar-brand">
                        Navbar
                        <span className="badge badge-success m-2">{this.props.navbarCount}</span>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar
