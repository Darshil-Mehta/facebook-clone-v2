import React from 'react'
import "./SideBarRight.css"
import SideBarRow from "./SideBarRow"
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'

function SideBarRight() {
    return (
        <div className="sidebarRight">
            <div className="sidebarRight__info">
                <h4>Contacts From Messenger</h4>
                <AddIcon />
            </div>
            <SideBarRow 
                src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f47d4de7637290765bce495%2F0x0.jpg"
                title="Elon Musk"
            />
            <SideBarRow 
                src="https://img.jagranjosh.com/imported/images/E/GK/mark-zuckerberg-biography%20(1).jpg"
                title="Mark Zuckerberg"
            />
            <SideBarRow 
                src="https://m.economictimes.com/thumb/msid-68940203,width-1200,height-900,resizemode-4,imgsize-139592/mukesh-ambani.jpg"
                title="Mukesh Ambani"
            />
            <SideBarRow 
                src="https://yt3.ggpht.com/ytc/AAUvwnjBxDbxCCpVNyEEKREl0qhQcIJ8DNaJkpv57LDsCMs=s900-c-k-c0x00ffffff-no-rj"
                title="Narendra Modi"
            />
            <SideBarRow 
                src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                title="Sundar Pichai"
            />
            <SideBarRow 
                src="https://assets.entrepreneur.com/content/3x2/2000/1602622169-jeff-bezos.jpeg"
                title="Jeff Bezos"
            />
            <SideBarRow 
                Icon={ExpandMoreOutlinedIcon}
                title="More"
            />
        </div>
    )
}

export default SideBarRight
