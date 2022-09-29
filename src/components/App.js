// HOOKS //
import React from "react";
import '../styles/App.scss';
//import PropTypes from 'prop-types';
import {Route, Routes} from 'react-router-dom';
// import { useState } from "react";


// COMPONENTS //
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path="/aboutme"
          element={
            <>
              <Header />
              <AboutMe />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path="/projects"
          element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          }>
        </Route>
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }>
        </Route>
      </Routes> 
  );
}
export default App;

