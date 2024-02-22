import './style.css';

function Nav(){
    return (
        <nav id='nav'>
            <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#presensation">Présentation</a></li>
                <li><a href="#gallery">Travaux</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cv">Cv</a></li>
            </ul>
        </nav>
    )
}

export default Nav;