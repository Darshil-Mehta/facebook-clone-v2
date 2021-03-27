import React from 'react'
import { Link } from 'react-router-dom';
import './RegisterHeader.css';

function RegisterHeader() {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/">
                    <img src="https://i.ibb.co/WzybLQK/del.png" alt="Facebook Logo" className="header__logo" />
                </Link>
            </div>
            <div className="header__right">
                <form>
                    <input className="header__input1" type="email" placeholder="Email" />

                    <input className="header__input2" type="password" placeholder="Password" />

                    <button type="submit" className="header__submit">Log In</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterHeader
