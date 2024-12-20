import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Note.css';
import Modal from './modal'


const Note = ({id, title, body, onDelete}) => {
    const [showModal, setShowModal] = useState(false);

    return(
    <div id='Note'>
        <h2>{title}</h2>
        <p>{body}</p>
        <button className="buttonNote" onClick={() => setShowModal(true)}>X</button>
        {showModal && createPortal(
        <Modal onClose={() => setShowModal(false)} />,
        document.body
      )}
    </div>
    )
}


export default Note;