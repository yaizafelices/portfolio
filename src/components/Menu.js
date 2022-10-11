import { Link } from 'react-router-dom';


import '../styles/Menu.scss';

const Menu = () => {

    return (
        <section className="menu">
        <nav>
          <ul className='menu__list'>
              <li className='menu__list-li'><Link className='menu__list-li-item' to='/' >Home</Link></li>
              <li className='menu__list-li'><Link className='menu__list-li-item' to='/aboutme' >About Me</Link></li>
              <li className='menu__list-li'><Link className='menu__list-li-item' to='/projects' >Projects</Link></li>
              <li className='menu__list-li'><Link className='menu__list-li-item' to='/contact'>Contact</Link></li>
          </ul>
        </nav>
        <div>
            
        </div>
      </section>
    );
}
export default Menu;