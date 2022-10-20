import { Link } from 'react-router-dom';
import { useState } from 'react';

import '../styles/Header.scss';
import logoHeader from '../images/logo-yaiza-finalY.png';




const Header = () => {

  const [toggle, setToggle] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  const handleMenu = (ev) => {
    ev.preventDefault();
    setToggle(!toggle);
    setMenuActive(!menuActive);
  };
  const handleClick = () => {
    setToggle(!toggle);
    setMenuActive(!menuActive);
  };

    return (
        <header className='header'>
          <figure className='header__logo'>
            <img className='header__logo-icon' src={logoHeader} alt="Yaiza" title='Yaiza'></img>
          </figure>
          
          <div>
            <div className= {`header__menu ${menuActive ? "active" : ""}`} onClick={handleMenu}>
              <button className="header__menu-bars">
                <div className="header__menu-bars-item-1"></div>
                <div className="header__menu-bars-item-2"></div>
                <div className="header__menu-bars-item-3"></div>
              </button>
              {toggle && (
                  <section className="menu">
                    <nav>
                      <ul className='menu__list'>
                          <li className='menu__list-li'><Link className='menu__list-li-item' to='/' onClick={handleClick}>Home</Link></li>
                          <li className='menu__list-li'><Link className='menu__list-li-item' to='/aboutme' onClick={handleClick}>About Me</Link></li>
                          <li className='menu__list-li'><Link className='menu__list-li-item' to='/projects' onClick={handleClick}>Projects</Link></li>
                          <li className='menu__list-li'><Link className='menu__list-li-item' to='/contact' onClick={handleClick}>Contact</Link></li>
                      </ul>
                    </nav>
                </section>
              )
              }
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