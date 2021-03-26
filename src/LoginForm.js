import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import "./LoginForm.css"
import { auth } from "./firebase"

function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory('')
    const login = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push('/');
            console.log(auth.user.email
                    )
        }).catch(error => {
            alert(error.message);
        })
    }
     return (
        <div className="login__form">
            <div className="loginForm__container">
                <h3 className="loginForm__header">Login Page</h3>
                <form >
                    <center>
                        <input 
                            onChange={e => setEmail(e.target.value)} 
                            type="email" 
                            placeholder="Email Address"
                        />
                    </center>
                    <center>
                        <input 
                            onChange={e => setPassword(e.target.value)} 
                            type="password" 
                            placeholder="Password"
                        />
                    </center>
                    <center>
                        <button onClick={login} className="login__button">Login</button>
                    </center>
                </form>
                <center>
                    <button className="forgot__password">Forgot Password?</button>
                </center>
            </div>
        </div>
    )
}

export default LoginForm
