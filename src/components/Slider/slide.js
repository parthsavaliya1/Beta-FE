import React, { Component } from "react";

class Slide extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { active, background } = this.props;
    let slideStyle = { backgroundImage: `url( ${background})` };
    return (
      <div className="slider__slide" data-active={active} style={slideStyle} />
    );
  }
}

export default Slide;
