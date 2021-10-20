import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p><Link to="/register">Create Account</Link></p>
                <br />
                <button>Google SignUp</button>

            </div>
        </div>
    );
};

export default Login;