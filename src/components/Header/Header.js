import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../hook/usefirebase';
import './Header.css'

const Header = () => {
    const { user, handleLogout } = useFirebase();
    console.log(user)
    return (
        <div className="header">
            <h1 className="head-name text-primary">GYME EDGE</h1>

            <div>
                <Link className="link" to="/home">Home</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/personal">Personal Traing</Link>
                <Link className="link" to="/about">About Us</Link>
                {user.email ? (<Link onClick={handleLogout} className="link" to="/login">Logout</Link>)
                    :
                    (<Link className="link" to="/login">Login</Link>)}



            </div>
        </div>
    );
};

export default Header;