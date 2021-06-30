import React, { Component } from "react";
import Fade from "react-reveal/fade";

export default class Countdown extends Component {
  render() {
    return (
      <div className="countdown_wrapper">
        <Fade left>
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">23</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">2</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">20</div>
              <div className="countdown_tag">Min</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">40</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
