import React from 'react';
import '../App.css';


const Navbar = ({setToken}) => {

    const logOutHandler = () => {
        setToken("");
        localStorage.clear();
    }

    return (
        <div className="navbar">
            <h1>Shopping App</h1>
            <button className="log-out-btn" onClick={ ()=> logOutHandler()}>Log Out</button>
        </div>
    );
};

export default Navbar;
