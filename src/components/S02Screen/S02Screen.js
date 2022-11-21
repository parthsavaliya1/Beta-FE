import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./s2.css";

function S02Screen() {
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

  const openThirdScreen = () => {
    window.location.href = "/s03";
  };

  const openScreenS04 = () => {
    window.location.href = "/s04";
  };

  const imageObj = [
    {
      desc: "Orthodox Press",
      img: "/Images/Orthodox_cover_test.png",
    },
    {
      desc: "Children’s Press",
      img: "/Images/Zerubbabel-Gilad.png",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s02-main">
            <div className="s02-main-layout">
              <div className="padding-0-48 text-center">
                <h1 className="m-0">
                  Billboard: From the Library Newspapers Collection
                </h1>
              </div>
              <div className="d-flex padding-0-48">
                <div>
                  <div className="l-r-border">
                    <div className="block-title">◼ Story</div>
                    <div className="block-sub-title"> Children’s Press</div>
                    <div>
                      <img
                        src="/Images/0003_a_cropped.png"
                        className="img-responsive"
                      ></img>
                    </div>
                    <div className="block-width">
                      Tamar’s Pages, By Deborah Omer, Davar Leyladim, Hebrew,
                      8.9.1959, Tel Aviv, Mandatory Land of Israel
                    </div>
                    <div className="common-text m-b-67">
                      The Hebrew children’s press was a tremendous enterprise of
                      creating culture and language. From the beginning of the
                      20th century, and even more so from the 1930s, Hebrew
                      children’s newspapers …
                    </div>
                    <button
                      onClick={() => openScreenS04()}
                      className="read-btn  m-b-67"
                    >
                      Read the children press story
                    </button>
                  </div>
                  <div className="text-red mt-41">
                    Hebrew and Arabic versions are a mirror image of the layout
                    (dir:rtl) All icons are in Masada in all langs
                  </div>

                  <div className="back d-flex">
                    <p className="m-0 back-arrow">← Back</p>

                    <div className="d-flex">
                      <span href="">En</span>{" "}
                      <span className="mr-ml-10">/</span>{" "}
                      <span href="">عر</span>{" "}
                      <span className="mr-ml-10">/</span>
                      <span href="">עב</span>
                    </div>
                  </div>
                </div>
                <div className="ml-11">
                  <div className="block-title mb-30">
                    ◼ More Stories from the collection
                  </div>
                  {imageObj?.map((item) => (
                    <div className="img-frame">
                      <div className="img-frame-text">{item?.desc}</div>
                      <div>
                        <img src={item?.img} className="img-responsive"></img>

                        <button className="read-btn num-of-img">5+</button>

                        <button
                          onClick={() => openThirdScreen()}
                          className="read-btn all-stories"
                        >
                          All stories
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default S02Screen;
