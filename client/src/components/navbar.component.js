import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to='/' className="navbar-brand">Home</Link>
                <div className="collapase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="navbar-item">
                    <Link to="/" className="nav-link">Home</Link>
                    </li> */}
                    <li className="navbar-item">
                    <Link to="/add" className="nav-link">Add File</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/course" className="nav-link">Add Course</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/leaderboard" className="nav-link">LeaderBoard</Link>
                    </li>
                    </ul>
                </div>
            </nav>
            
        );
    }
}