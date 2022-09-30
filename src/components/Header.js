import { Link } from 'react-router-dom';

import '../styles/Header.scss';
import logoHeader from '../images/logo-yaiza-finalY.png';

const Header = () => {
    return (
        <header className='header'>
          <nav class="header__menu">
            
              <i className="fas fa-bars header__menu-icon"></i>
            
          </nav>
          <figure className='header__logo'>
            <img className='header__logo-icon' src={logoHeader} alt="Yaiza" title='Yaiza'></img>
          </figure>
          <nav>
            <ul className='header__list'>
                <li className='header__list-li'><Link className='header__list-li-item' to='/'>Home</Link></li>
                <li className='header__list-li'><Link className='header__list-li-item' to='/aboutme'>About Me</Link></li>
                <li className='header__list-li'><Link className='header__list-li-item' to='/projects'>Projects</Link></li>
                <li className='header__list-li'><Link className='header__list-li-item' to='/contact'>Contact</Link></li>
            </ul>
          </nav>
        </header>
    );
}
export default Header;