import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Reverie, we believe in the art of culinary excellence,</p>
        </div>
        <p className="p__opensans">where every dish is a masterpiece and every meal a memorable experience. We're dedicated to using the freshest, locally sourced ingredients to craft dishes that not only please the palate but nourish the soul. Our commitment to healthy and indulgent cuisine is matched only by our passion for warm hospitality and creating moments of pure delight. Join us in embracing the beauty of food, the joy of sharing, and the elegance of fine dining. </p>
      </div>

      <div className="app__chef-sign">
        <p>Emma Butler</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;