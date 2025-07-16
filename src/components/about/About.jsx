import React from "react";
import "./About.css";
import cutieImg from '../../img/cutie.jpg';
import TextTrail from './TextTrail';


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cutieImg} alt="About me" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          Heyoo guys
        </p>
        <p className="a-desc">
          I'm Ayush, a MERN stack developer and B.Tech CSE student at SRM University, Chennai.
          I love turning ideas into real, usable web applications with clean code and intuitive design.
          My focus is on building scalable and responsive full-stack projects using technologies like React, Node.js, MongoDB, and Express.
          <br /><br />
          I’m always excited to learn new tools, explore better UI/UX patterns, and improve both frontend and backend workflows.
          I'm particularly passionate about combining creativity and logic to deliver seamless user experiences.
          <br /><br />
          I'm currently open to internship roles, freelance projects, and collaboration with like-minded developers.
          Let’s connect and build something impactful together!
        </p>

        {/* <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
