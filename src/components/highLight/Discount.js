import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Discount extends Component {
  render() {
    return (
      <Fade>
        <div className="center_wrapper">
          <div className="discount_wrapper">
            <div className="discount_percentage">
              <span>0 %</span>
              <span>OFF</span>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Discount;
