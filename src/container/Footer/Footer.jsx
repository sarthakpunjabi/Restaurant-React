import React from 'react';

import { FiFacebook,FiTwitter,FiInstagram } from 'react-icons/fi'
import { FooterOverlay,Newsletter } from '../../components'
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Address</p>
          <p className="p__opensans">Phone number</p>
          <p className="p__opensans">Phone number</p>
      </div>
      <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer" />
          <p className="p__opensans">The best way to find yourselve is to loose yourself to the service of others</p>
          <img src={images.spoon} alt="spoon" className='spoon_img' style={{marginTop:15}} />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday</p>
          <p className="p__opensans">10-11</p>
          <p className="p__opensans">Saturday-Sunday</p>
          <p className="p__opensans">11-10</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2021 Copyright to Rojo Tomate</p>
    </div>
  </div>
);

export default Footer;
