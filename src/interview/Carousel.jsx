import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'image/tplt2.jpg',
  },
  {
    src: 'image/tplt3.jpg',
  },
  {
    src: 'image/tplt1.jpg',
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

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;