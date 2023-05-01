import React from 'react';
import "./Home.css";
import Me from "../../assets/avatar-1.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
const Home = () => {
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} alt="" className='home__img' />
        <h1 className="home__name">chudir vai</h1>
        <span className="home_education">I'm a Full-Stack developer
        </span>
        
        <HeaderSocials />

        <a href="#contact" className='btn'>Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  )
}

export default Home