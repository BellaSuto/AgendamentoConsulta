import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useMediaQuery } from 'react-responsive';

const Carousel = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Altere conforme necessário
    slidesToScroll: 1
  };

  if (!isMobile) {
    return null; // Não renderiza o carousel se não for mobile
  }

  return (
    <Slider {...settings}>
      <div>
        <h3>Slide 1</h3>
      </div>
      <div>
        <h3>Slide 2</h3>
      </div>
      <div>
        <h3>Slide 3</h3>
      </div>
      {/* Adicione mais slides conforme necessário */}
    </Slider>
  );
};

export default Carousel;
