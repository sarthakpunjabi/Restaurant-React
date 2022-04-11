import React from 'react';

import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt=""/>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus sit iste labore asperiores iure recusandae numquam consectetur ad vitae officia voluptatibus fuga, est alias qui unde iusto quam suscipit!</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>

      

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">History</h1>
        <img src={images.spoon} alt="about_spoon"  className='spoon__img'/>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos accusamus sit iste labore asperiores iure recusandae numquam consectetur ad vitae officia voluptatibus fuga, est alias qui unde iusto quam suscipit!</p>
        <button type='button' className='custom__button'>Know more</button>
      </div>
      
    </div>
  </div>
);

export default AboutUs;
