import Nav from '../../components/Nav';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth > 1024);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // [] signifie que cela ne s'exécute qu'une seule fois après le montage initial

    return (
        <header id="menu">
            <h2 id='nom-logo'>ANAÏSK</h2>
            <i className={`fa-solid fa-bars menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>
            <CSSTransition
                in={isMenuOpen}
                timeout={300} // Durée de la transition en millisecondes
                classNames="menu"
                unmountOnExit
            >
                <Nav />
            </CSSTransition>
        </header>
    )
}

export default Menu;