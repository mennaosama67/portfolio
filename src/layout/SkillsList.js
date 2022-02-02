import React from "react";
import "../styles/skills.css";
import Skill from "../components/Skill";
import MainHeader from "../components/MainHeader";
import { Element } from 'react-scroll'

function SkillsList() {
  return (
    <Element id='skills'>

      <div className="container ">
        <MainHeader>Skills</MainHeader>
        <h1 className="about-header">I've Got Some skills.</h1>
        <div className="row my-skills pt-5">
          <Skill
            image="https://img.icons8.com/color/48/000000/html-5--v1.png"
            skill="HTML"
            
          />

          <Skill
            image="https://img.icons8.com/color/48/000000/css3.png"
            skill="CSS"
          />

          <Skill
            image="https://img.icons8.com/color/48/000000/javascript--v1.png"
            skill="JavaScript"
          />
        </div>
        <div className="row my-skills pt-5">
          <Skill
            image="https://img.icons8.com/color/48/000000/bootstrap.png"
            skill="Bootstrap"
          />

          <Skill
            image="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/000000/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-filled-tal-revivo.png"
            skill="JQuery"
          />
          <Skill
            image="https://img.icons8.com/color/48/000000/sass.png"
            skill="SASS"
          />
        </div>
        <div className="row my-skills pt-5">
          <Skill
            image="https://img.icons8.com/office/40/000000/react.png"
            skill="ReactJs"
          />

          <Skill
            image="https://img.icons8.com/color/48/000000/redux.png"
            skill="Redux"
          />
          <Skill
            image="https://img.icons8.com/color/48/000000/git.png"
            skill="Git & GitHub"
          />
        </div>
      </div>
    </Element>
  );
}

export default SkillsList;
