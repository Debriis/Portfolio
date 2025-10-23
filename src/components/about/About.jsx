import React from "react";
import "./About.css";
import cutieImg from '../../img/cutie.jpg';
import TextTrail from './TextTrail';

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg">
         {<img src={cutieImg} alt="About me" className="a-img" /> }
        </div>
        <div className="a-card">
          {<img src={cutieImg} alt="About me" className="a-img" /> }
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">Heyoo guys </p>

        <p className="a-desc"> I'm a MERN stack developer & B.Tech CSE student at SRM University, Chennai.</p>
        <p className="a-desc"> I build scalable, responsive web apps using React, Node.js, MongoDB & Express.</p>
        <p className="a-desc"> I love clean code, intuitive design, and seamless user experiences.</p>
        <p className="a-desc"> I’m always exploring new tools, better UI/UX patterns, and smoother workflows.</p>
        <p className="a-desc"> Open to internships, freelance projects, and collaborations with creative minds.</p>

        
       
      </div>
    </div>
  );
};

export default About;
