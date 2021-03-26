import React from 'react'
import { Link } from "react-router-dom"
import "./RegisterHeader.css"
import { auth } from "./firebase"

function RegisterHeader() {
    return (
        <div className="register__header">
            <Link className="facebook__logo" to="/">
                <img
                    src="https://www.bikealarmman.com/images/bam-facebook-logo.png"
                    alt="Facebook Logo"
                />
            </Link>
            <Link className="login__button" to="/login">
                <button>
                    Already Have an Account?
                </button>
            </Link>
        </div>
    )
}

export default RegisterHeader
