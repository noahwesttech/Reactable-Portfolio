import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/backgroundimg.jpg";
import SelfPortrait from "../assets/itsme.jpg"
import { Link } from "react-router-dom";

const heroImg = () => {
  return <div className="hero"> 
    <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
    </div>
    <div className="content">
        <br></br>
        <p>WELCOME TO MY PORTFOLIO</p>
        <h1>Noah Westberry</h1>
        <div>
            <Link to="/project" className="btn">My Projects</Link>
            <Link to="/contact" className="btn-light">Contact Me</Link>
        </div>
        <br></br>
            <img classname="selfie" src={SelfPortrait} alt="SelfPortrait" />
            <p>I am a 24 year old Web Development student</p>

    </div>
    </div>
}

export default heroImg
