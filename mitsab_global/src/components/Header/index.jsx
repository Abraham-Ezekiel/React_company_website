import React, { useRef } from 'react';
import './Header.css';
import { hero_image } from '../../assets';
import { Link } from 'react-scroll';
import Achievement from '../Achievement';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const Header = () => {
  const container = useRef(null);
  useGSAP(()=>{
    const timeline = gsap.timeline({delay:1, stagger:1});
    timeline
    .fromTo(
      ".image_container",
      {scale:.5, opacity:0, y:150},
      {scale:1, ease:'sine.in', opacity:1, y:0}
    )
    .from(
      ".title",
      {opacity:0, y:-30}
    )
    .from(
      ".description",
      {opacity:0, y:-30}
    )
    .from(
      ".buttons_container",
      {opacity:0, y:40}
    )
  })
  return (
    <header id="header">
      <div className="container full_height">
        <div className="row">
          {/* Left Column - Text */}
          <div className="column">
            <h1 className="title">
              Building Dreams, <span className="g-text">Creating Reality</span>
            </h1>
            <p className="text_muted description">
              We are dedicated to turning your visions into tangible masterpieces. 
              With years of experience and a team of skilled professionals, 
              we specialize in delivering high-quality construction services tailored 
              to meet the unique needs of each client.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">
                Our Services
              </Link>
              <Link to="contact" smooth={true} className="btn btn_primary">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="column">
            <div className="image_container">
              <img src={hero_image} alt="Hero" />
            </div>
          </div>
        </div>
        <Achievement/>
      </div>
    </header>
  );
};

export default Header;
