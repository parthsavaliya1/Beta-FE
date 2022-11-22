import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const S07Screen = () => {
  const handleZoomIn = () => {
    const element = document.getElementsByClassName("img-s07");
    element[0].style.transform = "scale(1.5)";
    console.log(element);
  };

  const handleZoomOut = () => {
    const element = document.getElementsByClassName("img-s07");
    element[0].style.transform = "inherit";
    console.log(element);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s01-main">
            <div className="text-white">BILLBOARD</div>
            <div className="text-white">
              From the Library Newspapers Collection
            </div>
            <div className="text-center">
              <img className="img-s07" src="/Images/s05_1.png" />
            </div>
            <div>
              <div className="text-white">Close</div>
              <div>
                <div className="text-white" onClick={() => handleZoomOut()}>
                  -
                </div>
                <div className="text-white" onClick={() => handleZoomIn()}>
                  +
                </div>
              </div>
              <div>
                <div className="text-white">1/2</div>
                <div className="text-white">Left</div>
                <div className="text-white">Right</div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default S07Screen;
