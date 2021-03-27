import React from 'react'
import "./SideBarLeft.css"
import SideBarRow from "./SideBarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore'

function SideBarLeft({ user }) {
    return (
        <div className="sidebarLeft">
            <SideBarRow
                src=" "
                title={user?.displayName}
            />
            <SideBarRow 
                Icon={LocalHospitalIcon}
                title='Covid-19 Information Center'
            />
            <SideBarRow 
                Icon={EmojiFlagsIcon}
                title='Pages'
            />
            <SideBarRow 
                Icon={PeopleIcon}
                title='Friends'
            />
            <SideBarRow 
                Icon={ChatIcon}
                title='Messenger'
            />
            <SideBarRow 
                Icon={StorefrontIcon}
                title='MarketPlace'
            />
            <SideBarRow 
                Icon={VideoLibraryIcon}
                title='Videos'
            />
            <SideBarRow 
                Icon={ExpandMoreOutlinedIcon}
                title='More'
            />
        </div>
    )
}

export default SideBarLeft