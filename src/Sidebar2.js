import React from 'react'
import './Sidebar2.css';

function Sidebar2() {
    return (
        <div className="sidebar2">
            <div className="sidebar2__languages">
                <p className="sidebar2__selected">English (UK) · </p>
                <p>English (US) · </p>
                <p>हिन्दी · </p>
                <p>اردو · </p>
                <p>தமிழ் · </p>
            </div>
            <div className="sidebar2__policies">
                <p>Privacy · </p>
                <p>Terms · </p>
                <p>Advertising · </p>
                <p>AdChoices · </p>
                <p>Cookies · </p>
                <p>More</p>
            </div>
            <p className="copyright">Facebook © 2020</p>
        </div>
    )
}

export default Sidebar2
