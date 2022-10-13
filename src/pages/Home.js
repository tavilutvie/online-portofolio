import React from "react";
import About from "./About";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <About />
            <Education />
            <Awards />
            <Skills />
            <Experience />
            <Contact />
            
        </div>
    );
};

export default Home;