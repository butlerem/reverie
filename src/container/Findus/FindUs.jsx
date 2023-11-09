import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">165 Chapel St Unit No. 1, Ottawa, ON K1N 0E7</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">

      <iframe
    width="100%"
    height="300"
    frameBorder="0"
    style={{ border: '3px solid #f7c8db' }}
        src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyBhaUYpq1VXktczprP467rfPV43W6GBA3o&center=45.43120532869718, -75.68066586758836&zoom=15&maptype=roadmap`}
        allowFullScreen
        title="Google Map"
      ></iframe>
    </div>
  </div>
);

export default FindUs;
