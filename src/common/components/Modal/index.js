import './style.css';
import Tag from "../Tag";
import React, { useRef, useEffect  } from 'react';

function Modal({ project, onClose }) {
    const modalRef = useRef(null); 

    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose(); // Fermer la modal si l'événement de clic est en dehors de la modal
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className='section-modal open'>
            <div className="backdrop" onClick={onClose}></div> {/* Ajouter un gestionnaire d'événements pour fermer la modal */}
            <div className="modal" ref={modalRef}>
                <button className="close-modal" onClick={onClose}>X</button>
                <img src={project.image} alt={project.name} />
                <h2>{project.name}</h2>
                <p className='project-date'><i>Date: {project.date}</i></p>
                <div className="modal-tags">
                    {project.tags.map((tag, index) => (
                        <Tag key={index} name={tag} />
                    ))}
                </div>
                <p className='project-description'>{project.description}</p>
                <div className='buttons-modal'>
                    <a className='button-modal' href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <button className='button-modal' onClick={onClose}>Fermer</button>
                </div>
            </div>
        </section>
    );
}

export default Modal;