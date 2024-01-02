import React from 'react'
import { links, SocialBar } from './Link'
import { useGlobalContext } from './context'




export const Sidebar = () => {
    const {isOpenSideBar, closeSidebar} = useGlobalContext();
    return (
        <div className={`sidebar-cont ${isOpenSideBar ? "show-sidebar" : ""}`}>
        <div className='side-header-container'>
        <div className='side-brand-name'>
                <h3>Side-Bar</h3>
         </div>
         <div className='close-btn-controller'>
               <button className='btn-closing' onClick={closeSidebar}>X</button>
         </div>
        </div>
            <div className='side-links-container'>
            <div className='nav-links'>
                {links.map((el)=>(
                     <a href={el.url} key={el.id}>{el.text}</a> 
                ))}
            </div>
            <div className='social-links'>
                <SocialBar/>
            </div>
            </div>
        </div>
      )
}
