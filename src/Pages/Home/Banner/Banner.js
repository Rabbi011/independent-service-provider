import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.jpg'
import banner2 from '../../../images/banner2.jpg'
import banner3 from '../../../images/banner3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Do gym trainers actually work?</h3>
                    <p>Working out with a personal trainer can actually boost the success rate of achieving your fitness goals by more than 30 percent</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>How much money is gym trainer?</h3>
                    <p>Personal trainers charge $25 to $50 per 30-minute session, $40 to $70 per hour session, and $60 to $100 per 90-minute session.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>What do trainers do at the gym?</h3>
                    <p>
                    Fitness trainers and instructors lead, instruct, and motivate individuals or groups in exercise activities, including cardiovascular exercises.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;