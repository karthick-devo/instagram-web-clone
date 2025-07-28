import React from 'react'
import SidebarContent from "../../assets/SidebarContent.json";
import SidebarItem from './components/SidebarItem';
import logo from "../../assets/ins.png"

import "./sidebar.css"
import "./components/SidebarItem.css"


const Sidebar: React.FC = () => {
    console.log("clicked");
    
    return (
        <div className='sidebar'>

            <img src={logo} alt='logo' className='logo' />

            {SidebarContent.map((item) => (<SidebarItem key={item.id} icon={item.icon} label={item.label} />))}


            <div>
                <span className=' d-flex'><i className="bi bi-three-dots"></i><p>More</p></span>
                <span className=' d-flex'><i className="bi bi-boxes"></i><p>Also from Meta</p></span>

            </div>
        </div>

    )
}

export default Sidebar