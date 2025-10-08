import "./intro.css";
import React from "react";
import Me from "../../img/saxyme.png";
import RotatingText from "./RotatingText";
import DecryptedText from './DecryptedText';
import TextPressure from './Name.jsx';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <div className="name-container">
              <TextPressure
                text="Ayush"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#ffffff"
                strokeColor="#E8B9BB"
                minFontSize={window.innerWidth <= 480 ? 28 : 64}
              />
            </div>
`

          <div className="i-title styled-title">
            <span className="static-part">I am a</span>{" "}
            <span className="animated-part">
              <RotatingText
                texts={['Web Developer', 'UI/UX Designer', ]}
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </span>
          </div>

          {/* --- Social & Resume Buttons --- */}
          <div className="i-links">
            <a href="https://github.com/Debriis" target="_blank" rel="noopener noreferrer" className="icon-btn">
              <img src="/icons/github4.png" alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/ayush-dhiman-a96173308/" target="_blank" rel="noopener noreferrer" className="icon-btn">
              <img src="/icons/linkedin.png" alt="LinkedIn" />
            </a>

            <a href="https://www.instagram.com/shutup.ayushhh/" target="_blank" rel="noopener noreferrer" className="icon-btn">
              <img src="/icons/insta.png" alt="Instagram" />
            </a>

           <a href="/icons/Ayushresumefinal.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
  <img src="/icons/resume.png" alt="Resume Icon" />
  <span>Resume</span>
</a>
          </div>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="Ayush" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
