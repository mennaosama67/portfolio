import React from 'react';

import PortfolioBtn from './PortfolioBtn';
function Project({imageSrc,codeUrl,demoUrl,projectName}) {
  return  ( 
    <div className="project col-lg-4 col-md-12 col-sm-12" data-aos="zoom-in-up">
  <img src={imageSrc} alt="project" />
  <div className="project-caption">
  <h3>{projectName}</h3>
   <a href={demoUrl} target="_blank" rel="noopener noreferrer"><PortfolioBtn ><i className="far fa-eye" title = "View Demo"></i></PortfolioBtn></a>
   <a href={codeUrl} target="_blank" rel="noopener noreferrer"><PortfolioBtn ><i className="fas fa-code" title = "View Code"></i></PortfolioBtn></a>
  </div>
</div>);
}
export default Project;
