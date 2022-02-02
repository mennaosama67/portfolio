import React from "react";
import '../styles/skills.css'
function Skill({image,skill}) {
  return (
    <div className="col-lg-4 col-md-4 col-sm-12 skill" data-aos="zoom-in-up"  data-aos-duration="1000">
      <img
        src={image}
        alt="skill-img"
      />

      <h2>{skill}</h2>
    </div>
  );
}

export default Skill;
