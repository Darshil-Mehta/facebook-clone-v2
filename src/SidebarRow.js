import React from 'react'
import './SidebarRow.css';

function SidebarRow({ selected, ImageLink, title, avatar }) {
    return (
        <div className={`sidebarRow ${selected && "selected"} ${avatar && "avatar"}`}>
            <div className='colorwrap'>
                <img src={ImageLink} alt="" className={`sidebarRow__icon ${avatar && "avatar"}`} />
                <h2 className={`sidebarRow__title ${avatar && "avatar"}`}>{title}</h2>
            </div>
        </div >
    )
}

export default SidebarRow