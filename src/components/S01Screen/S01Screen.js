import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import S02Screen from "../S02Screen/S02Screen";
import "./s01.css";

const S01Screen = () => {
  var urls = [
    "/Images/s01t.png",
    "/Images/s01.png",
    "/Images/s01t.png",
    "/Images/s02t.png",
    "/Images/s01t.png",
    "/Images/s04t.png",
  ];
  var cout = 1;

  useEffect(() => {
    const element = document.getElementsByClassName("s01-image");
    if (element[0]) {
      console.log("ele", element);
      element[0].src = `${urls[cout]}`;
      setInterval(() => {
        element[0].src = `${urls[cout]}`;
        cout == urls.length - 1 ? (cout = 0) : cout++;
      }, 50000);
    }
  }, []);

  const openSecondScreen = () => {
    window.location.href = "/s02";
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s01-main">
            <div>
              <img
                className="s01-image"
                onClick={() => openSecondScreen()}
              ></img>
            </div>
            <div className="image-content">
              <span className="p-r-15">▶ Read More</span>
              <span className="p-r-15">اقرأ أكثر</span>
              <span className="p-r-15">◀ קראו עוד</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default S01Screen;
