import React, { useState } from 'react'
import Carousel from "react-bootstrap/Carousel";
import First from '../Logo/first.jpg'
import Second from '../Logo/second.jpg'


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
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <button className="donate-button">Donate</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ Second }
            alt="Second slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="donate-button">Donate</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ First }
            alt="Third slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="donate-button">Donate</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ First }
            alt="Fourth slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="donate-button">Donate</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-section">
          <img
            className="d-block sliding-image"
            src={ First }
            alt="Fifth slide"
          />
          <Carousel.Caption className="element-details">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <button className="donate-button">Donate</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ControlledCarousel