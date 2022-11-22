import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SwiperSlider from "../Slider/SwiperSlide";

const sliderObj = [
  {
    date: "May 3, 1942",
    img: "/Images/s05_1.png",
    desc: `"My Son has already grown up." Davar layladim Reports on the Holocaust`,
    name: "Yitzak Yatziv",
    shortDesc:
      'My Son has already grown up." Davar layladim Reports on the Holocaust',
  },
  {
    date: "May 3, 1942",
    img: "/Images/s05_2.png",
    desc: `"My Son has already grown up." Davar layladim Reports on the Holocaust`,
    name: "Yitzak Yatziv",
    shortDesc:
      'My Son has already grown up." Davar layladim Reports on the Holocaust',
  },
  {
    date: "May 3, 1942",
    img: "/Images/s05_3.png",
    desc: `"My Son has already grown up." Davar layladim Reports on the Holocaust`,
    name: "Yitzak Yatziv",
    shortDesc:
      'My Son has already grown up." Davar layladim Reports on the Holocaust',
  },
];
class S05Screen extends Component {
  render() {
    console.log(sliderObj);
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
            <SwiperSlider sliderObj={sliderObj} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default S05Screen;
