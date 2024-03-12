import Nav from '../../components/Nav';
import React, { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './style.css';

function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(true); 
    const [isMenuFixed, setIsMenuFixed] = useState(false); 
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset || document.documentElement.scrollTop);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const menu = document.getElementById('menu');
            const menuOffsetTop = menu.offsetTop;

            if (scrollTop > prevScrollPos && scrollTop >= menuOffsetTop) {
                setIsMenuFixed(true);
            } else if (scrollTop < prevScrollPos && scrollTop <= 771) {
                setIsMenuFixed(false);
            } 

            setPrevScrollPos(scrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setIsMenuOpen(false);
            }
            else {
                setIsMenuFixed(true);
                setIsMenuOpen(true)
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header id="menu" className={`${isMenuFixed ? 'fixed-menu' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <h2 id='nom-logo'>ANAÏSK</h2>
            <i className={`fa-solid fa-bars menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}></i>
            <CSSTransition
                in={isMenuOpen}
                timeout={300} 
                classNames="menu"
                unmountOnExit
            >
                <Nav />
            </CSSTransition>
        </header>
    )
}

export default Menu;