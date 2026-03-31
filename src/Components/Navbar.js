import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";


function Navbar(){
    return(<>

    <nav className="navbar">
            <div className="navbar-right">
                <h2>Complaint & Issue Management System</h2>
            </div>
            
            <div className="navbar-left">
                <Link to="/">About</Link>
                <Link to="/login">
                <button className="login-btn">Login</button>
                </Link>
            </div>
        </nav>

    </>);
}

export default Navbar;