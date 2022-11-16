import React from "react";
import { Col, Container, Row } from "react-bootstrap";

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
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s01-main">
            <div>
              <div className="text-white">
                Stories from the Library Newspapers Collection
              </div>
            </div>

            <div>
              {dataObj?.map((item) => (
                <>
                  <div className="text-white">{item.desc}</div>
                  <div>
                    <img src={item.img} />
                  </div>
                </>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default S03Screen;
