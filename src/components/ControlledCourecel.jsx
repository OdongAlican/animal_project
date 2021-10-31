import React, { useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import First from '../Logo/first.jpg'
import Second from '../Logo/second.jpg'
import Third from '../Logo/third.jpg'
import Fourth from '../Logo/fourth.jpg'
import Fifth from '../Logo/fifth.jpg'

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ First }
            alt="First slide"
          />
          <Carousel.Caption className="element-details">
                <h3>Cattle Farms</h3>
                <p>Castration, Vaccination, Pregnancy Diagnosis, and others</p>
                <button className="donate-button">View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ Second }
            alt="Second slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Goats Farm</h3>
            <p>Sensitization of farmers, Voluntary treatment, and others.</p>
            <button className="donate-button">View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ Third }
            alt="Third slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Stray Dogs</h3>
            <p>
              Rabies vaccination, spay and neuter and others.
            </p>
            <button className="donate-button">View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ Fourth }
            alt="Fourth slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Poultry Farm</h3>
            <p>
            Sensitization of farmers, Vaccination, de-beaking, and others
            </p>
            <button className="donate-button">View More</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ Fifth }
            alt="Fifth slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Pigs Farm</h3>
            <p>
              Sensitization of farmers, Voluntary treatment, and others.
            </p>
            <button className="donate-button">View More</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel