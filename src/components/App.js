// HOOKS //
import React from "react";
import '../styles/App.scss';
//import PropTypes from 'prop-types';
//import {Route, Routes} from 'react-router-dom';
// import { useState } from "react";


// COMPONENTS //
// import Header from "./Header";
// import Home from "./Home";
// import AboutMe from "./AboutMe";
// import Projects from "./Projects";
// import Contact from "./Contact";

import logoHeader from '../images/logo-yaiza-finalY.png';
import '../styles/Header.scss';
import '../styles/Home.scss';
import '../styles/Contact.scss';
import workInProgress from '../images/work-in-progress.png';


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
        <main>
          <section className="home">
            <h1 className="home__hi">Hi there</h1>
            <h2 className="home__name">I´m Yaiza a junior Front-End Developer</h2>
            <h3 className="home__portfolio">And here you can see all about me, my personal projects and my contact</h3>
          </section>
          <section className="">
            <figure className='progress'>
              <img className='' src={workInProgress} alt="Work in progres" title='Work in progress'></img>
            </figure>
          </section>
          <section className="aboutme">

          </section>
          <section className="projects">
            
          </section>
          <section className="contact">
          <nav>
        <ul class="contact__list">
          <li class="contact__list-icon" >
            <a class="contact__list-icon-a"  href="www.linkedin.com/in/yaiza-soria-felices" target="_blank" rel="noreferrer"
              ><i class="fa-brands fa-linkedin-in icon "></i
            ></a>
          </li>
          <li class="contact__list-icon">
            <a class="contact__list-icon-a"  href="https://github.com/yaizafelices" target="_blank" rel="noreferrer"
              ><i class="fa-brands fa-github icon"></i
            ></a>
          </li>
          <li class="contact__list-icon">
            <a class="contact__list-icon-a" href="https://twitter.com/yaizafelices" target="_blank" rel="noreferrer"
              ><i class="fa-brands fa-twitter icon"></i
            ></a>
          </li>
        </ul>
      </nav>
            
          </section>
        </main>
    </div>
  );
}
export default App;

