import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 902-818-9940</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.reverie} alt="footer_logo" />
        <p className="p__opensans">&quot;The art of service is the art of making someone else feel at home.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Hours</h1>
        <p className="p__opensans">Sunday - Thursday:</p>
        <p className="p__opensans">07:30 am - 11:00 pm</p>
        <p className="p__opensans">Friday & Saturday:</p>
        <p className="p__opensans">07:30 am - 1:00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 Reverie. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;