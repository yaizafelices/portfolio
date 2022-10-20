// HOOKS //
import React from "react";
import '../styles/App.scss';
//import PropTypes from 'prop-types';
import {Route, Routes} from 'react-router-dom';



// COMPONENTS //
import Header from "./Header";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Menu from "./Menu";

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }>
        </Route>
        <Route
          path="/aboutme"
          element={
            <>
              <AboutMe />
            </>
          }>
        </Route>
        <Route
          path="/projects"
          element={
            <>
              <Projects />
            </>
          }>
        </Route>
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }>
        </Route>
        <Route
          path="/menu"
          element={
            <>
              <Menu />
            </>
          }>
        </Route>
      </Routes> 
    </> 
  );
}
export default App;

