import React from "react";
import About from "./About";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import Interests from "./Interests";
import Skills from "./Skills";


const Home = () => {
    return (
        <div>
            <About />
            <Awards />
            <Education />
            <Experience />
            <Interests />
            <Skills />
        </div>
    );
};

export default Home;