import React from "react";
import "../styles/navbar.css";
import * as Scroll from "react-scroll";

function Navbar() {
  let Link = Scroll.Link;

  window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    let windowPosition = window.scrollY > 0;
    navbar.classList.toggle("scrolling-active", windowPosition);
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top ">
      <div className="container">
        <Link className="navbar-brand" to="home">
          <span>MENNA</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li className="nav-item ">
              <Link
                className="nav-link "
                to="home"
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="about"
                spy={true}
                smooth={true}
                offset={-150}
                duration={300}
              >
                About
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link "
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-80}
                duration={200}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link "
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={300}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
