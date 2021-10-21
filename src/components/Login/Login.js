import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';


const Login = () => {
    const { signInUsingGoogle,
        handleUserLogin } = useAuth()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const hanldeEmail = (e) => {
        setEmail(e.target.value);
    };
    const hanldePassword = (e) => {
        setPassword(e.target.value);
    };
    console.log(email, password)




    const handleLogin = () => {
        handleUserLogin(email, password);
    };


    return (
        <div className="login-form">
            <div>
                <h1 className="text-primary">Login Here!!</h1>
                <form onSubmit={handleLogin}  >
                    <input onBlur={hanldeEmail} type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input onBlur={hanldePassword} type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p><Link to="/register">Create Account</Link></p>
                <br />
                <button className="bg-warning" onBlur={signInUsingGoogle}>Google SignUp</button>

            </div>
        </div>
    );
};

export default Login;