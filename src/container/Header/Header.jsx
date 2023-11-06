import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Elegant Dining from Sunrise to Sunset" />
      <h1 className="app__header-h1">Where Culinary Dreams Begin</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Reverie is where culinary dreams come to life. We believe that each sunrise and sunset deserves to be celebrated with the finest flavors. We're here to make your dining experiences truly unforgettable. </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;