import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants'
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the New Flavour"/>
      <h1 className="app__header-h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>
        We and our partners store and/or access information on a device, such as cookies and process personal data, such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement, and audience insights, as well as to develop and improve products.
        With your permission we and our partners may use precise geolocation data and identification through device scanning. You may click to consent to our and our partners’ processing as described above. Alternatively you may access more detailed information and change your preferences before consenting or to refuse consenting.
      
      </p>
      <button type='button' className='custom__button'>Explore menu</button>
    </div>
    <div className="app__wrapper_img">
        <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
