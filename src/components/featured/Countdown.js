import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export default class Countdown extends Component {
  state = {
    deadline: "Dec, 16, 2021",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0",
  };
  getTimeUntil(deadline) {
    let time = Date.parse(deadline) - Date.parse(new Date());

    if (time < 0) {
      console.log("Date passed");
    } else {
      let seconds = Math.floor((time / 1000) % 60);
      let minutes = Math.floor((time / 1000/60) % 60);
      let hours = Math.floor((time / (1000 * 60*60))%24);
      let days = Math.floor((time / (1000 * 60*60*24)));

      this.setState({
          days,
          seconds,
          minutes,
          hours,
      })
    }
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <div className="countdown_wrapper">
        <Fade left>
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">Hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>

            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}
