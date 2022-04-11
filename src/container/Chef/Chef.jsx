import React from 'react';

import { images } from '../../constants'
import { SubHeading } from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we Believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus officiis deleniti eius perferendis totam autem corporis asperiores, architecto in eveniet nemo? Quos voluptatem adipisci enim dolore beatae quibusdam iusto? Amet?</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eos laboriosam atque reiciendis obcaecati vero optio ut soluta. Cum, officia. Atque, assumenda! Necessitatibus cum vel, doloremque eum ratione quidem fugiat!
        Hic dolorem quae illum illo, perferendis vel eos amet. Ipsum unde recusandae cum repellat magnam id quam, sunt quibusdam at iste quae. Vitae aliquam fugiat iusto unde repudiandae itaque quae.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Duo</p>
        <p className="p__opensans">chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
