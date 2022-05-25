import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './img/logo.png';

function Header(){
    return (
    <header class="Header">
        <nav>
            <div class="nav__logo">
                <img src={Logo} alt="" class="nav__logo--img" />
                <p class="nav__logo--text"> Mil<br/>huellitas</p>
            </div>

            <input type="checkbox" id="check" />
            <label for="check" class="bar__btn">
                <i class="fa-solid fa-bars"></i>
            </label>

            <ul class="nav__menu">
                <li><Link to="/">INICIO</Link></li>
                <li><Link to="/adopcion">ADOPCIÓN</Link></li>
                <li><Link to="/donacion">DONACIÓN</Link></li>
                <li><Link to="/blog">BLOG</Link></li>
                <li><Link to="/aliados">ALIADOS</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;