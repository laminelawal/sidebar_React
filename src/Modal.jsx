import React from 'react'
import { useGlobalContext } from './context';

function Modal(){

    const {isModalOpen, closeModal} = useGlobalContext();

    return(
        <div className={`modal-content ${isModalOpen ? "show-modal" : ""}`}>
        <h4>Sono il contenuto del Modal</h4>
        <small className='close-modal-btn' onClick={closeModal}>
            <p>X</p>
        </small>
        </div>
    )
}

export default Modal;