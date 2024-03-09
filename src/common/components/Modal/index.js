import './style.css';
import Tag from "../Tag";
import React, { useRef, useEffect, useState  } from 'react';

function Modal({ project, onClose }) {
    const modalRef = useRef(null); 
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (project) {
            setIsOpen(true);
        }
    }, [project]);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose();
        }, 300); // Temps de transition, ajustez selon la durée de votre animation CSS
    };

    return (
        <section className={`section-modal ${isOpen ? 'open' : ''}`}>
            <div className="backdrop" onClick={handleClose}></div>
            <div className="modal" ref={modalRef}>
                <button className="close-modal" onClick={handleClose}>x</button>
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
                    <a className='button-modal-git' href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </section>
    );
}

export default Modal;