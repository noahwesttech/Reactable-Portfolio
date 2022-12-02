import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/backgroundimg.jpg";
import { Link } from "react-router-dom";

const heroImg = () => {
  return <div className="hero"> 
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <p>WELCOME TO MY PORTFOLIO</p>
        <h1>Web Developer</h1>
        <div>
            <Link to="/projects" className="btn">My Projects</Link>
            <Link to="/contact" className="btn-light">Contact Me</Link>
        </div>
    </div>
    </div>
}

export default heroImg
