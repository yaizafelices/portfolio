// HOOKS //
import React from "react";
import '../styles/App.scss';
//import PropTypes from 'prop-types';
import {Route, Routes} from 'react-router-dom';
// import { useState } from "react";


// COMPONENTS //
// import Header from "./Header";
// import Home from "./Home";
// import AboutMe from "./AboutMe";
// import Projects from "./Projects";
// import Contact from "./Contact";

import logoHeader from '../images/logo-yaiza-finalY.png';
import '../styles/Header.scss';


function App() {
  return (
    <div> 
        <header className='header'>
          <figure className='header__logo'>
            <img className='header__logo-icon' src={logoHeader} alt="Yaiza" title='Yaiza'></img>
          </figure>

          <nav>
            <ul className='header__list'>
                <li className='header__list-li'>Home</li>
                <li className='header__list-li'>About Me</li>
                <li className='header__list-li'>Projects</li>
                <li className='header__list-li'>Contact</li>
            </ul>
          </nav>

        </header>
    </div>
  );
}
export default App;

