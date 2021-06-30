import React from "react";
import Slider from "react-slick";
import slide_one from "../../resources/images/nancy.jpg";
import slide_two from "../../resources/images/bbb.jpg";
import slide_three from "../../resources/images/bbbb.jpg";

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{ overflow: "hidden", height: `${window.innerHeight}px` }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`,
              backgroundPosition: "center",
              //   backgroundSize: "100px",
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`,
              backgroundPosition: "center",
              //   backgroundSize: "100px",
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`,
              backgroundPosition: "center",
              //   backgroundSize: "100px",
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
