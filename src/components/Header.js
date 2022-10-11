import { Link } from 'react-router-dom';

import '../styles/Header.scss';
import logoHeader from '../images/logo-yaiza-finalY.png';


const Header = () => {

    return (
        <header className='header'>
          <figure className='header__logo'>
            <img className='header__logo-icon' src={logoHeader} alt="Yaiza" title='Yaiza'></img>
          </figure>
          <div>
            <div className= "header__menu">
              <nav className="header__menu-bars">
              <Link className='header__list-li-item' to='/Menu'><i className="fas fa-bars header__menu-bars-icon"></i> </Link>
                  
              </nav>
            </div>
            <nav>
              <ul className='header__list'>
                  <li className='header__list-li'><Link className='header__list-li-item' to='/'>Home</Link></li>
                  <li className='header__list-li'><Link className='header__list-li-item' to='/aboutme'>About Me</Link></li>
                  <li className='header__list-li'><Link className='header__list-li-item' to='/projects'>Projects</Link></li>
                  <li className='header__list-li'><Link className='header__list-li-item' to='/contact'>Contact</Link></li>
              </ul>
            </nav>
          </div>
        </header>
    );
}
export default Header;