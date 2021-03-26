import React from 'react'
import "./LoginHeader.css"
import { Link } from "react-router-dom"

function LoginHeader() {
    return (
        <div className="login__header">
            <Link className="facebook__logo" to="/">
                <img
                    src="https://www.bikealarmman.com/images/bam-facebook-logo.png"
                    alt="Facebook Logo"
                />
            </Link>
            <Link className="register__button" to="/register">
                <button>
                    Create An Account
                </button>
            </Link>
        </div>
    )
}

export default LoginHeader
