import { useContext } from "react";
import About from "./components/about/About.jsx";
import Intro from "./components/intro/Intro.jsx";
import Product from "./components/product/Product.jsx";
import Bg from "./components/Bg.jsx";
import RotatingText from './components/intro/RotatingText'
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx";
import ScrollVelocity from "./components/ScrollVelocity.jsx";
import MagicBento from "./components/MagicBento.jsx";

const App = () => {
  return (
    <div>
      
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
      >
        <Bg
          particleColors={['#F4AFC2', '#F4AFC2']}
          particleCount={700}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Main content scrolls over background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        
        <Intro />
        <ScrollVelocity />
        <About />
        
        <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={false}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={20}
  glowColor="244, 175, 194"
/>
        
        <Contact />
        {/* Add more components here as needed */}
      </div>
    </div>
  );
};

export default App;
