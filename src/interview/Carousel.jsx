import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

import './Carousel.css';

const items = [
  {
    src: 'image/tplt2.jpg',
  },
  {
    src: 'image/tplt3.jpg',
  },
  {
    src: 'image/tplt4.jpg',
  },
  {
    src: 'image/tplt5.jpg',
  },
  {
    src: 'image/tplt7.jpg',
  },
];

const Carousel = () => <div className="Carousel"><UncontrolledCarousel items={items} /></div>;

export default Carousel;