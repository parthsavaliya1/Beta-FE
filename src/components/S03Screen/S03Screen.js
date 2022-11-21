import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./s3.css";

const S03Screen = () => {
  const dataObj = [
    { desc: "The Dreyfus Affair", img: "/Images/s032.png" },
    { desc: "Children’s Press", img: "/Images/s032.png" },
    { desc: "Parties Press", img: "/Images/s032.png" },
    { desc: 1948, img: "/Images/s032.png" },
    { desc: "Orthodox Press", img: "/Images/s032.png" },
    { desc: "The Arab Revolt", img: "/Images/s032.png" },
    { desc: "Story Cover", img: "/Images/s032.png" },
  ];

  const openScreenS08 = () => {
    window.location.href = "/s08";
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s03-main">
            <div className="s03-main-layout">
              <div>
                <div className="text-white">
                  <h1 className="m-0">
                    Stories from the Library Newspapers Collection
                  </h1>
                </div>
              </div>

              <div>
                <div className="display-grid mt-41">
                  {dataObj?.map((item) => (
                    <>
                      <div className="s03-img-frame">
                        <div className="img-frame-text text-center">
                          {item.desc}
                        </div>
                        <div>
                          <img src={item.img} className="img-responsive" />
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>

              <div className="back d-flex">
                <div className="d-flex">
                  <p className="m-0 back-arrow">&#10005; Close</p>

                  <div className="d-flex">
                    <span href="">En</span> <span className="mr-ml-10">/</span>{" "}
                    <span href="">عر</span> <span className="mr-ml-10">/</span>
                    <span href="">עב</span>
                  </div>
                </div>
                <div className="d-flex">
                  <span onClick={() => openScreenS08()}>
                    <span className="i-cricle">ℹ</span> About
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default S03Screen;
