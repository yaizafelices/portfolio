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
import '../styles/AboutMe.scss';
import '../styles/Projects.scss';
import workInProgress from '../images/work-in-progress.png';
import photoYaiza from '../images/photo-yaiza.jpg';



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
            <figure className='aboutme__photo'>
              <img className='aboutme__photo-yaiza' src={photoYaiza} alt="Yaiza Soria Felices" title='Photo Yaiza'></img>
            </figure>
            <article className='aboutme__text'>
              <p className='aboutme__text-item'>My name is Yaiza</p>
              <p className='aboutme__text-item'>I studied Food Engineering, but after working as a quality manager in a vegetable company in Mercamadrid, I realised that it was not my passion and I start watching videos of Javascript and it´s was amazing.</p>
              <p className='aboutme__text-item'>So in may of this year I start the Bootcampo of web Developer in Adalab, where I learned:</p>
              <ul className="aboutme__text-list">
                <li>HTML5, CSS3, Flexbox, CSS Grid, SASS, Bootstrap.</li>
                <li>JavaScript (ES6) and web services (APIs) from third
                    parties.
                </li>
                <li>Version control with Git</li>
                <li>Create SPAs with React.</li>
                <li>Basics knowledge APIs and back development:
                    applications with Node JS, Express and SQL.
                </li>
                <li>Use of Slack, Github, VS Code, Gulp, Terminal, Linter,
                    Zeplin
                </li>
              </ul>
              <p className='aboutme__text-item'>I am a person with a great capacity for adaptation, autonomy and self-taught, capable of facing challenging situations and overcoming challenges.</p>
              <p className='aboutme__text-item'>Wishing to have my first opportunity as a junior web programmer, and to be able to continue learning and putting into practice all my knowledge.</p>
            </article>

          </section>
          <section className="projects">
            <h2 className="projects__title">Projects</h2>
            <ul className="projects__list">
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/list_of_harry_potter_characters/"><div className="projects__list-item-hp"></div><p className="projects__list-item-description">Web to search characters of Harry Potter | HTML / CSS / React JS</p>
                <p>Personal project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/hangman_game/"><div className="projects__list-item-hangman"></div><p className="projects__list-item-description">Page to play hangman game | HTML / CSS / React JS</p>
                <p>Personal project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/profile_cards/"><div className="projects__list-item-jokers"></div><p className="projects__list-item-description">Web to create a personal profile card | HTML / CSS / JavaScript</p>
                <p>Team project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/list-quotes-of-friends-intermediate-review-exercise/"><div className="projects__list-item-friends"></div><p className="projects__list-item-description">Web search quotes of friends | HTML / CSS / React JS</p>
                <p>Personal project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/find_anime_series/"><div className="projects__list-item-anime"></div><p className="projects__list-item-description">Web to search anime series | HTML / CSS / JavaScript</p>
                <p>Personal project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/list_of_task/"><div className="projects__list-item-tasks"></div><p className="projects__list-item-description">Page of a list of tasks | HTML / CSS / React JS</p>
                <p>Personal project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/team-contact-page/"><div className="projects__list-item-contactpage"></div><p className="projects__list-item-description">Team contact page| HTML / CSS </p>
                <p>Team project</p></a>
              </li>
              <li className="projects__list-item">
                <a href="https://yaizafelices.github.io/design_website/"><div className="projects__list-openspaces"></div><p className="projects__list-item-description">Design website | HTML / CSS / JavaScript</p>
                <p>Personal project</p></a>
              </li>
            </ul>
          </section>
          <section className="contact">
          <nav>
        <ul class="contact__list">
          <li class="contact__list-icon" >
            <a class="contact__list-icon-a"  href="https://www.linkedin.com/in/yaiza-soria-felices/"
             target="_blank" rel="noreferrer"
              ><i class="fa-brands fa-linkedin-in icon "></i
            ></a>
          </li>
          <li class="contact__list-icon">
            <a class="contact__list-icon-a" href="mailto:yaizafelices@gmail.com" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-envelope icon"></i></a>
          </li>
          <li class="contact__list-icon">
            <a class="contact__list-icon-a" href="tel:+34628298845" target="_blank" rel="noreferrer">
            <i class="fa-solid fa-phone icon"></i></a>
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

