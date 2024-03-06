import './style.css';

function Footer(){
    return(
        <footer id="footer">
            <div id='contact-links'>
                <a href="mailto:khelif.anaispro@email.com" aria-label="Envoyer un e-mail à Anaïs Khelif">
                    <i className="fa-solid fa-envelope" ></i>
                </a>
                <a href="https://www.linkedin.com/anaïs-khelif/" aria-label="Profil LinkedIn d'Anaïs Khelif" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </div>
            <p>© 2024 Anaïs KHELIF, Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;