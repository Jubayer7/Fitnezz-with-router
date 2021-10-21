import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';


const Register = () => {
    const { handleUserRegister } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        handleUserRegister(email, password);
    };
    return (
        <div>
            <div className="login-form">
                <div>
                    <h2>Register: Create Account</h2>
                    <form onSubmit={handleRegister}>
                        <input onBlur={hanldeEmail} type="email" name="" id="" placeholder="Your Email" />
                        <br />
                        <input onBlur={hanldePassword} type="password" name="" id="" placeholder="Your Password" />
                        <br />
                        <input type="submit" value="Submit" />
                    </form>
                    <p>Already have an account? <Link to="/login">Login</Link></p>


                </div>
            </div>
        </div>
    );
};

export default Register;