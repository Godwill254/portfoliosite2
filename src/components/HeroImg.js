import "./HeroImgStyles.css";
import React from "react";
import IntroImg from "../assets/1.jpg";
import { Link } from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero" >
      <div className="mask">
        <img className="intro-img" src={ IntroImg } alt="intro" /> 
      </div> 
      <div className="content">
        <p>Hi, I'm a freelancer</p>
        <h1>React Developer.</h1>
        <div> 
          <Link to="/project" className="btn"> Projects </Link>
          <Link to="/contact" className="btn-light"> Contact </Link>
        </div>
      </div>     
    </div>
  )
}

export default HeroImg;
