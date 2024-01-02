import React from 'react'
import  "./index.css"
import { Sidebar } from './Sidebar'
import { Navbar } from './Navbar'
import Modal from './Modal'
import { useGlobalContext } from './context'

 const App = () => {

    const {isModalOpen, openModal} =  useGlobalContext();

    return(
        <>
        <Navbar/>
        <Sidebar/>
        <Modal/>
        {!isModalOpen &&(
            <button className='modal-open-btn' onClick={openModal}>
                Apri Modal
            </button>
        )}
        </>
    )
 }

export default App;