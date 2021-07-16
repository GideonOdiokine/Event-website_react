import React, { Component } from "react";
import Btn from "../utis/Button";
import Zoom from "react-reveal/Zoom";
class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Balcony package is affordable to every student in campus.,",
      "Medium is a package which is affordable by everyone ",
      "Star is a VIP package for the people that can afford",
    ],
    linkto: ["http://sales/b", "http://sales/n", "http://sales/s"],
    delay: [500, 0, 500],
  };
  showBoxes = () =>
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_inner_wrapper">
          <div className="pricing_title">
            <span>${this.state.prices[i]}</span>
            <span>{this.state.positions[i]}</span>
          </div>
          <div className="pricing_description">{this.state.desc[i]}</div>
          <div className="pricing_buttons">
            <Btn
              text="purchase ticket"
              color="#fff"
              bck="#ffa800"
              link={this.state.linkto[i]}
            />
          </div>
        </div>
      </Zoom>
    ));
  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
