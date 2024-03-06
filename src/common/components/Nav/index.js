import './style.css';
import CV from '../../../assets/CV_2023_anaiskhelif.pdf';
import React, { useEffect, useState } from 'react';

function Nav({ isMenuOpen }) {

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.clientHeight;
                if (window.pageYOffset >= top && window.pageYOffset < top + height) {
                    setActiveLink(`#${section.id}`);
                }
            });
        };

        // Ajouter un gestionnaire d'événements pour le défilement
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav id='nav' className={isMenuOpen ? 'open' : ''}>
            <ul>
                <li><a className={activeLink === '#image' ? 'active' : ''} href="#image">Accueil</a></li>
                <li><a className={activeLink === '#presentation' ? 'active' : ''} href="#presentation">Présentation</a></li>
                <li><a className={activeLink === '#gallery' ? 'active' : ''} href="#gallery">Travaux</a></li>
                <li><a className={activeLink === '#skills' ? 'active' : ''} href="#skills">Compétences</a></li>
                <li><a className={activeLink === '#footer' ? 'active' : ''} href="#footer">Contact</a></li>
                <li><a href={CV} rel="noreferrer" target="_blank">Cv</a></li>
            </ul>
        </nav>
    );
}

export default Nav;