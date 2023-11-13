import React, { ReactNode, useEffect, useRef, useState, useMemo, useCallback } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
interface MultipleItemsProps {
  children: ReactNode;
}

export default function SimpleSlider({ children }: MultipleItemsProps) {

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: false,
      slidesToShow: 8,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      swipe: true,
      responsive: [
        {
          breakpoint: 1500,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 800,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  }, []);

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
}