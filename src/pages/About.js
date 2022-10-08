import './About.css';

import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
    <div>
        <h1>About Me</h1>
        <img className="about-profile-pic"  src="images/foto1.jpg" alt="Eldenabih Tavirazin Lutvie" />
        <p>
            Hello! 
        </p>
        <p>
            My name is Eldenabih Tavirazin Lutvie from the Department of Informatics Engineering, Sepuluh Nopember Institute of Technology. I live in the city of Surabaya, East Java. I have a desire to become a great Software Developer.
        </p>
    </div>
    );
  }
}