import React, { ReactNode, useMemo, useRef, useState } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TendingNowItemType } from "../../store/slices/movie/type";

interface MultipleItemsProps {
  filteredTendingNow: TendingNowItemType[];
  callBack: (id: string) => void;
}

export default function SimpleSlider({ filteredTendingNow, callBack }: MultipleItemsProps) {
  const [isSwiping, setIsSwiping] = useState(false);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 10000,
      pauseOnHover: true,
      swipe: true,
      beforeChange: () => setIsSwiping(true),
      afterChange: () => setIsSwiping(false),
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

  const handleClick = (id: string) => {
    if (!isSwiping) {
      callBack(id);
    }
  };


  
  return (
    <Slider {...settings}>
      {filteredTendingNow?.map(({ Id, CoverImage }: TendingNowItemType) => (
        <div key={Id}>
          <button
            onClick={() => handleClick(Id)}
            className="items"
            style={{ backgroundImage: `url(${CoverImage})` }}
          ></button>
        </div>
      ))}
    </Slider>
  );
}
