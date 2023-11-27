import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg section__padding" id="about">

    <div className="app__aboutus-content">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans text-center">Reverie has redefined the art of fine dining for breakfast aficionados and cocktail lovers alike. Established in 2023 by Executive pastry chef Emma Butler, Reverie was born from the vision of a dream restaurant, a captivating and airy space that brings breakfast to new heights. Within the welcoming ambiance, guests are treated to delectable breakfast items and visually stunning cocktails, making every visit an unforgettable culinary journey.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans text-center">In 2023, Reverie came to life in Ottawa as an upscale breakfast haven. This picturesque establishment blends elegance with the joy of comfort food. Reverie has become a place where breakfast transcends the ordinary, with each day adding to the legacy of this remarkable restaurant, offering a delightful dining experience for our guests. Our focus has always been on creating a space where guests feel welcomed and inspired.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;