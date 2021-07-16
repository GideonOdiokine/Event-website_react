// import React, { Component } from "react";

// import MyButton from '../utils/MyButton';

import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Button from "../utis/Button";

const Discount = () => {
  const [countStart, setCountStart] = useState(0);
  const [countEnd, setCountEnd] = useState(30);

  const percentage = () => {
    if (countStart < countEnd) {
      setCountStart(countStart + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      percentage();
    }, 30);
  }, [countStart]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade>
          <div className="discount_porcentage">
            <span>{countStart} %</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className="discount_description">
            <h3>Purchase tickets before 20th JULY</h3>
            <p>
              30% percent discount for users that purchase tickets on before
              20th July. VIP users will be given prizes after dancing
            </p>
            <Button
              text="Purchase tickets"
              bck="#ffa800"
              color="#fff"
              link="www.facebook.com/GidysmartOdiokine"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
