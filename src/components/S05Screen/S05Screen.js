import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SlickSlider from "../Slider/slick";
import SwiperSlider from "../Slider/SwiperSlide";
class S05Screen extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div className="s01-main">
              <div className="text-white">BILLBOARD</div>
              <div className="text-white">
                From the Library Newspapers Collection
              </div>
              <div className="text-white">Children’s Press</div>
              <div className="text-white">
                The Hebrew children’s press was a tremendous enterprise of
                creating culture and language. From the beginning of the 20th
                century, Hebrew children’s newspapers occupied a central place
                in the cultural existence, until it is difficult to imagine the
                lives of children in Eretz Israel without it.
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <SwiperSlider />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default S05Screen;
