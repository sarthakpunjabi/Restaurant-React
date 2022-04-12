import React from 'react';
import { SubHeading} from '../../components'
import { images,data} from '../../constants'

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='contact' />
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}}>FindUs</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">address</p>
        <p className="p__cormorant" style={{color:'#DCCA87', margin:'2rem 0'}}>Opening hours</p>
        <p className="p__opensans">mon - fri </p>
        <p className="p__opensans">sat - sun</p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
    
  </div>
);

export default FindUs;
