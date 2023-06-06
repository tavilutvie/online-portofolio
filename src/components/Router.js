import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import Personality from "../pages/Personality";
import Awards from "../pages/Awards";
import Experience from "../pages/Experience";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Education' element={<Education />} />
        <Route path='/Personality' element={<Personality />} />
        <Route path='/Awards' element={<Awards />} />
        <Route path='/Experience' element={<Experience />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Projects' element={<Projects />} />
    </Routes>
  );
}