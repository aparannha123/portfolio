import React from 'react';
import "./About.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id='about'>
    <h2 className="section__title">About Me</h2>

    <div className="about__container grid">
      <img src={Image} alt="" className='about__img' />

      <div className="about__data grid">
        <div className="about__info">
          <p className="about__description">I am Aparannha Roy,
           web developer from Andul,Howrah. I have rich experience in 
           web site design and building and customization, also I am good at Wordpress.</p>
          <a href="https://drive.google.com/file/d/1CnBEM6RezA9rdQnEoYfdj2OjNS8fyRya/view?usp=sharing" className="btn">Download CV</a>
        </div>

        <div className="about__skills grid">
          <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                  <span className="skills__number">92%</span>
                </div>


                <div className="skills__bar">
                  <span className="skills__percentage development"></span>
                </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                  <span className="skills__number">82%</span>
                </div>


                <div className="skills__bar">
                  <span className="skills__percentage ui__design"></span>
                </div>
          </div>

          <div className="skills__data">
            <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                  <span className="skills__number">50%</span>
                </div>


                <div className="skills__bar">
                  <span className="skills__percentage photography"></span>
                </div>
          </div>
        </div>
      </div>
    </div>

    <AboutBox />
    </section>
  )
}

export default About
