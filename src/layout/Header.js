import React from "react";
import "../styles/header.css";
import Sparkles from "react-sparkle";
import Button from "../components/Button";
import * as Scroll from "react-scroll";
import { Element } from "react-scroll";

function Header() {
  let Link = Scroll.Link;
  return (
    <Element id="home">
      <div className=" home-wrapper container ">
        <Sparkles flicker={false} fadeOutSpeed={3} minSize={8} maxSize={10} />
        <div className="row home-content ">
          <div
            className="col-lg-7 col-md-12 col-sm-12 home-header"
            data-aos="fade-right"
          >
            <h3> hello there</h3>
            <h1>
              I am Menna Osama. <br />I am a Front-End deveolper.
            </h1>
          </div>

          <div
            className="col-lg-4 col-md-7 col-sm-7 home-btns"
            data-aos="fade-left"
          >
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-100}
              duration={300}
            >
              <Button>Latest Projects</Button>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-150}
              duration={300}
            >
              {" "}
              <Button> more about me</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/menna-allah-osama"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/mennaosama67"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/menna.osama.520"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
            <span>Facebook</span>
          </a>
        </li>
      </ul>
      <Sparkles
        flicker={false}
        fadeOutSpeed={3}
        newSparkleOnFadeOut={true}
        minSize={8}
        maxSize={10}
      />
    </Element>
  );
}

export default Header;
