import logo from '../../../assets/images/logo.svg';
import Nav from '../../components/Nav';
import './style.css';

function Menu() {
    return (
        <header id="menu">
            <img src={logo} alt='logo' />
            <Nav />
        </header>
    )
}
export default Menu; 