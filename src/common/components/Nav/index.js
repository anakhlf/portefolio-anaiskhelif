import './style.css';
import CV from '../../../assets/CV_2023_anaiskhelif.pdf';
import React, { useEffect, useState } from 'react';

function Nav({ isMenuOpen }) {
    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPosition = window.scrollY;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.clientHeight;
                if (scrollPosition >= top && scrollPosition < top + height) {
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

    const scrollToSection = (id) => {
        const section = document.querySelector(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth' // Défilement fluide
            });
        }
    };

    return (
        <nav id='nav' className={isMenuOpen ? 'open' : ''}>
            <ul>
                <li><button className={activeLink === '#image' ? 'active' : ''} onClick={() => scrollToSection('#image')}>Accueil</button></li>
                <li><button className={activeLink === '#presentation' ? 'active' : ''} onClick={() => scrollToSection('#presentation')}>Présentation</button></li>
                <li><button className={activeLink === '#gallery' ? 'active' : ''} onClick={() => scrollToSection('#gallery')}>Travaux</button></li>
                <li><button className={activeLink === '#skills' ? 'active' : ''} onClick={() => scrollToSection('#skills')}>Compétences</button></li>
                <li><button className={activeLink === '#footer' ? 'active' : ''} onClick={() => scrollToSection('#footer')}>Contact</button></li>
                <li><a href={CV} rel="noreferrer" target="_blank">Cv</a></li>
            </ul>
        </nav>
    );
}

export default Nav;