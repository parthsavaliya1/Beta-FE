import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addGrayClass } from "../../utils";
import "./s7.css";

const S07Screen = () => {
  const handleZoomIn = () => {
    const element = document.getElementsByClassName("img-s07");
    element[0].style.transform = "scale(1.2)";
    element[0].style.transition = "transform .5s ease";
    console.log(element);
  };

  const handleZoomOut = () => {
    const element = document.getElementsByClassName("img-s07");
    element[0].style.transform = "inherit";
    console.log(element);
  };

  useEffect(() => {
    addGrayClass();
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div class="s04-main s07-main">
            <div class="s03-main-layout">
              <div class="text-center">
                <div class="mb-51">
                  <div class="font-size-18 mb-7">BILLBOARD</div>
                  <div class="font-size-18">
                    From the Library Newspapers Collection
                  </div>
                </div>
              </div>
              <div className="text-center img-07-block">
                <img
                  className="img-responsive img-s07"
                  src="/Images/big-img.png"
                />
              </div>
              <div className="back d-flex footer-leg s07-footer">
                <div
                  className="align-item-center cursor-pointer d-flex"
                  onClick={() => handleZoomOut()}
                >
                  <svg
                    className="mr-18"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.931"
                    height="21.497"
                    viewBox="0 0 19.931 21.497"
                  >
                    <g
                      id="Group_320"
                      data-name="Group 320"
                      transform="translate(-61.763 -1815.36)"
                    >
                      <line
                        id="Line_3"
                        data-name="Line 3"
                        x2="18.456"
                        y2="20.146"
                        transform="translate(62.5 1816.035)"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      />
                      <line
                        id="Line_4"
                        data-name="Line 4"
                        x1="18.456"
                        y2="20.146"
                        transform="translate(62.5 1816.035)"
                        fill="none"
                        stroke="#000"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                  Close
                </div>
                <div className="d-flex align-item-center plus-min">
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => handleZoomOut()}
                  >
                    <span> - </span>
                  </div>
                  <div
                    className="text-white cursor-pointer"
                    onClick={() => handleZoomIn()}
                  >
                    <span> + </span>
                  </div>
                </div>
                <div className="d-flex align-item-center">
                  <div className="mr-24">1/2</div>
                  <div className="text-white">
                    <img
                      className="img-responsive mr-12"
                      src="/Images/previous.png"
                    />
                  </div>
                  <div className="text-white">
                    <img className="img-responsive" src="/Images/next.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default S07Screen;
