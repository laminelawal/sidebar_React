import React from 'react'
import { SocialBar, links } from './Link'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';


export const Navbar = () => {

 const {openSidebar} = useGlobalContext();
  


  return (
    <header>
    <div className='header-container'>
    <div className='brand-name'>
            <h3>Nav-Bar</h3>
     </div>
     <div className='side-btn-controller'>
            <FaBars className='icon-navbar' onClick={openSidebar}/>
     </div>
    </div>
        <div className='links-container'>
        <div className='nav-links'>
            {links.map((el)=>(
                 <a href={el.url} key={el.id}>{el.text}</a> 
            ))}
        </div>
        <div className='social-links'>
            <SocialBar/>
        </div></div>
    </header>
  )
}
