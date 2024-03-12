import './style.css';

function Footer(){
    return(
        <footer id="footer">
            <div id='contact-links'>
                <a href="mailto:khelif.anaispro@email.com" aria-label="Envoyer un e-mail à Anaïs Khelif">
                    <i className="fa-solid fa-envelope" ></i>
                </a>
            </div>
            <p>© 2024 Anaïs KHELIF, Tous droits réservés.</p>
        </footer>
    );
}

export default Footer;