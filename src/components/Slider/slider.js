import React, { Component } from "react";
import Slide from "./slide";
import "./slider.css";
class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSlide: 0,
      interval: 3,
      autoplay: true,
    };
  }

  componentDidMount() {
    const { autoplay, interval } = this.state;
    this.timerId = setInterval(() => {
      console.log(autoplay);
      if (autoplay) {
        this.nextSlide();
      }
    }, interval * 10000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  pause() {
    this.setState({ autoplay: false });
  }

  resume() {
    this.setState({ autoplay: true });
  }

  prevSlide() {
    const { slides } = this.props;
    const { activeSlide } = this.state;

    let slide = activeSlide - 1 < 0 ? slides.length - 1 : activeSlide - 1;
    this.setState({
      activeSlide: slide,
    });
  }

  nextSlide() {
    const { slides } = this.props;
    const { activeSlide } = this.state;

    let slide = activeSlide + 1 < slides.length ? activeSlide + 1 : 0;
    this.setState({
      activeSlide: slide,
    });
  }

  render() {
    const { activeSlide } = this.state;
    const { slides } = this.props;
    return (
      <div
      // onMouseEnter={this.pause.bind(this)}
      // onMouseLeave={this.resume.bind(this)}
      >
        {slides.map((slide, index) => {
          return (
            <Slide
              background={slide.background}
              text={slide.text}
              active={index === activeSlide}
            />
          );
        })}
        <div className="rightArrow" onClick={this.nextSlide.bind(this)}>
          <i className="fa fa-4x fa-arrow-circle-right"></i>
        </div>
        <div className="leftArrow" onClick={this.prevSlide.bind(this)}>
          {" "}
          <i className="fa fa-4x fa-arrow-circle-left"></i>
        </div>
      </div>
    );
  }
}

export default Slider;
