import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 className="head-name text-primary">GYME EDGE</h1>

            <div>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/support">Support</Link>
                <Link className="link" to="/about">About Us</Link>
                <Link className="link" to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;