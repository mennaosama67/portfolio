import React from "react";
import "../styles/portfolio.css";
import pompeo from "../images/pompeo.jpg";
import scienc from '../images/sceinc.jpg'
import infinity from '../images/infinity.jpg'
import travel from '../images/travel-site.png'
import MainHeader from './../components/MainHeader';
import { Element } from 'react-scroll'

import Project from '../components/Project'
function Portfolio() {
  return (
    <Element id="portfolio">
      <div className="container">
      <MainHeader >Portfolio</MainHeader>
      <h1 className="about-header">See My Latest Projects.</h1>
      <div className="row">
      <Project imageSrc={pompeo} codeUrl="https://github.com/mennaosama67/pompeo" demoUrl="https://pompeo-react.netlify.app/"/>
      <Project imageSrc={scienc} codeUrl="https://github.com/mennaosama67/scenic" demoUrl="https://scenic-site.netlify.app/"/>
      <Project imageSrc={infinity} codeUrl="https://github.com/mennaosama67/infinity" demoUrl="https://infinity-site.netlify.app/"/>
    
      </div>
      <div className="row">
      <Project imageSrc={travel} codeUrl="https://github.com/mennaosama67/travel-website" demoUrl="https://mennaosama67.github.io/travel-website/"/>
      </div>
   
    </div>
    </Element>
  );
}

export default Portfolio;
