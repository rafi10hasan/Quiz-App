
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ControlledCarousel.css'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className='mb-5'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://code-boxx.com/wp-content/uploads/2022/03/CVR-js-quiz.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <p>There are lot of programming question in this website.if you check your programming situation,then you can visit this site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://htmlcssmonk.com/wp-content/uploads/2020/10/cssquiz.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <p>There are lot of programming question in this website.if you check your programming situation,then you can visit this site</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src="https://repository-images.githubusercontent.com/182525249/aadd7a80-54fe-11eb-9872-ccd06b8789b6"
          alt="Third slide"
        />

        <Carousel.Caption>
        <p>There are lot of programming question in this website.if you check your programming situation,then you can visit this site</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
        </div>
    );
};

export default ControlledCarousel;

