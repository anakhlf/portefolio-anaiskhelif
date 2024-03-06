import Nav from '../../components/Nav';
import React, { useEffect, useState } from 'react';
import './style.css';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        function handleScroll() {
    var imageSection = document.getElementById('image');
    var menu = document.getElementById('menu');
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var imageHeight = imageSection.offsetHeight;

    if (scrollTop > imageHeight) {
        menu.classList.add('fixed-menu');
    } else {
        menu.classList.remove('fixed-menu');
    }
}

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // S'exécute une seule fois après le montage du composant
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header id="menu">
            <h2 id='nom-logo'>ANAÏSK</h2>
            <i className={`fa-solid fa-bars menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>
            <Nav isMenuOpen={isMenuOpen} />
        </header>
    )
}
export default Menu; 