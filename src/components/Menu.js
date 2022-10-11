import { Link } from 'react-router-dom';


const Menu = () => {
    return (
        <section>
        <nav className="header__menu-list">
          <ul className='header__menu-list'>
              <li className='header__menu-list-li'><Link className='header__menu-list-li-item' to='/' >Home</Link></li>
              <li className='header__menu-list-li'><Link className='header__menu-list-li-item' to='/aboutme' >About Me</Link></li>
              <li className='header__menu-list-li'><Link className='header__menu-list-li-item' to='/projects' >Projects</Link></li>
              <li className='header__menu-list-li'><Link className='header__menu-list-li-item' to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <div>
            
        </div>
      </section>
    );
}
export default Menu;