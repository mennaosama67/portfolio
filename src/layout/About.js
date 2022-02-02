import React from 'react'
import MainHeader from '../components/MainHeader'
import '../styles/about.css'
import Button from './../components/Button';
function About() {
  
    return (
        <section id="about">
            <div className="container">
                <MainHeader>About</MainHeader>
                <h1 className="about-header">More about me</h1>
                <div className="about-content p-top" data-aos="fade-up" data-aos-delay='50'>
                    <h2 >I am a Front-End Developer</h2>
                    <div className="underline "></div>
                    <p className=" mt-5">Creative Front-End Developer with experience building responsive web applications using technologies and programming languages such as HTML,CSS,JavaScript plus modern Libraries and frameworks like bootstrap and ReactJs.I love exploring new technologies, libraries and learning new concepts.</p>
                    <div className="personal-info mt-5 p-4" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay='300'>
                    <h5  >Personal Infos </h5>
                    <div className="row pt-5 info">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                        <i className="fas fa-angle-right"></i> <span> <span>Age :</span>  23</span>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                        <i className="fas fa-angle-right"></i>  <span> <span>Degree :</span> Bacholer in computer science</span>
                        </div>
                    </div>
                    <div className="row pt-5 info">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                        <i className="fas fa-angle-right"></i> <span> <span>Location : </span>Cairo,Egypt</span>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12">
                        <i className="fas fa-angle-right"></i>  <span> <span>Phone :</span> +2 01123429727</span>
                        </div>
                    </div>
                    <div className="row py-5 info">
                        <div className="col-lg-8 col-md-12 col-sm-12">
                        <i className="fas fa-angle-right"></i> <span> <span>Email : </span>menna7868@gmail.com</span>
                        </div>
                       
                    </div>
                    </div>
                    <a href="https://drive.google.com/file/d/1JD3_Oa3UkzmLK6Wp4yFYqC-okPxhwvwv/view?usp=sharing" target="_blank" rel="noopener noreferrer"><Button>View My CV</Button></a> 
                </div>
            </div>
        </section>
    )
}

export default About
