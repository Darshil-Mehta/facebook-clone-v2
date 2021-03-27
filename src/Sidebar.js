import React from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow.js';

function Sidebar({ user }) {
    return (
        <div className="sidebar">
            <SidebarRow avatar ImageLink="https://scontent-maa2-2.xx.fbcdn.net/v/t1.30497-1/c94.0.320.320a/p320x320/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=xJbPAeMXf4wAX8qQk04&_nc_ht=scontent-maa2-2.xx&oh=1cce9c5de9c5a219ebe87da0179d7633&oe=5F51E03D" title={user?.displayName} />
            <SidebarRow selected ImageLink="https://www.flaticon.com/premium-icon/icons/svg/1674/1674711.svg" title="News Feed" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/733/733548.svg" title="Messenger" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2991/2991552.svg" title="Watch" />
            <h3>Explore</h3>
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/889/889102.svg" title="Welcome" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/2750/2750767.svg" title="COVID-19 Information" />
            <SidebarRow ImageLink="https://www.flaticon.com/premium-icon/icons/svg/277/277658.svg" title="Pages" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/3076/3076753.svg" title="Events" />
            <SidebarRow ImageLink="https://image.flaticon.com/icons/svg/681/681392.svg" title="Groups" />
        </div>
    )
}

export default Sidebar
