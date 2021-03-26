import React, { useState } from 'react'
import "./RegisterForm.css"
import { useHistory } from "react-router-dom"
import { auth } from './firebase';

function RegisterForm() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory('');
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
            if(auth.user){
                auth.user.updateProfile({
                    displayName: fname + " " + lname
                }).then(s => {
                    history.push('/login');
                })
            }
        }).catch(error => {
            alert(error.message);
        })
    }
    return (
        <div className="register__form">
            <div className="registerForm__container">
                <form>
                    <h3 className="registerForm__header">Register Now!</h3>
                    <center>
                        <input 
                            onChange={e => setFname(e.target.value)} 
                            type="text" 
                            placeholder="Firstname" 
                        />
                    </center>
                    <center>
                        <input 
                            onChange={e => setLname(e.target.value)} 
                            type="text" 
                            placeholder="Lastname"
                        />
                    </center>
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
                        <p className="terms__condition">
                            By clicking on the register button you agree to all the <span className="text__effect">terms and conditions</span>.
                        </p>
                    </center>
                    <center>
                        <button onClick={register} className="register__button">
                            Register Now!
                        </button>
                    </center>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm