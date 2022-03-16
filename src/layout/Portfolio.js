import React from "react";
import "../styles/portfolio.css";
import pompeo from "../images/pompeo.jpg";
import scienc from '../images/sceinc.jpg'
import infinity from '../images/infinity.jpg'
import travel from '../images/travel-site.png'
import netflix from '../images/netflex-img.PNG'
import ecommerce from '../images/e-commerce-img.PNG'
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
      <Project imageSrc={pompeo} codeUrl="https://github.com/mennaosama67/pompeo" demoUrl="https://pompeo-react.netlify.app/" projectName="Pompeo e-commerce"/>
      <Project imageSrc={scienc} codeUrl="https://github.com/mennaosama67/scenic" demoUrl="https://scenic-site.netlify.app/" projectName="Scenic landing page"/>
      <Project imageSrc={infinity} codeUrl="https://github.com/mennaosama67/infinity" demoUrl="https://infinity-site.netlify.app/" projectName=" infinity landing page"/>
      </div>
      <div className="row">
      <Project imageSrc={travel} codeUrl="https://github.com/mennaosama67/travel-website" demoUrl="https://mennaosama67.github.io/travel-website/" projectName="Travel"/>
      <Project imageSrc={netflix} codeUrl="https://github.com/mennaosama67/netflix-clone" demoUrl="https://netflix-clone67.netlify.app/" projectName="Netflix"/>
      <Project imageSrc={ecommerce} codeUrl="https://github.com/mennaosama67/e-commerce" demoUrl="https://mennaosama67.github.io/e-commerce/" projectName="Rymo e-commerce"/>


      </div>
   
    </div>
    </Element>
  );
}

export default Portfolio;
