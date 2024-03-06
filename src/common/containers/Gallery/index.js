import React, { useState } from 'react';
import Title from '../../components/Title';
import Work from '../../components/Work';
import Modal from '../../components/Modal'
import projects from '../../../assets/projects.json';

import './style.css';

function Gallery() {
    const [selectedProject, setSelectedProject] = useState(null); // État pour suivre le projet sélectionné

    const openModal = (project) => {
        setSelectedProject(project); // Mettre à jour l'état avec le projet sélectionné
        console.log('modal open');
    };

    const closeModal = () => {
        setSelectedProject(null); // Réinitialiser l'état pour fermer la modal
    };

    return (
    
        <section id="gallery">
            <Title backgroundTitle="Mes travaux" mainTitle="Travaux" />
            <div className="work-gallery">
                {projects.map((project, index) => (
                    <Work key={index} project={project} onClick={() => openModal(project)} />
                ))}
            </div>
            {selectedProject && <Modal project={selectedProject} onClose={closeModal} />}
        </section>
    
    );
}

export default Gallery;