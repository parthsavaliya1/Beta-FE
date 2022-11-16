import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

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

  const renderScreens03 = () => {
    window.location.href = "/s03";
  };

  const renderScreenS04 = () => {
    window.location.href = "/s04";
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s01-main">
            <div className="text-white">
              Billboard: From the Library Newspapers Collection
            </div>
            <div>
              <div>
                <div className="text-white">◼ Story Children’s Press</div>
                <div>
                  <img src="/Images/0003_a_cropped.png"></img>
                </div>
                <div className="text-white">
                  Tamar’s Pages, By Deborah Omer, Davar Leyladim, Hebrew,
                  8.9.1959, Tel Aviv, Mandatory Land of Israel
                </div>
                <div className="text-white">
                  The Hebrew children’s press was a tremendous enterprise of
                  creating culture and language. From the beginning of the 20th
                  century, and even more so from the 1930s, Hebrew children’s
                  newspapers …
                </div>
                <button onClick={() => renderScreenS04()}>
                  Read the children press story
                </button>
              </div>
              <div>
                <div className="text-white">
                  ◼ More Stories from the collection
                </div>
                {imageObj?.map((item) => (
                  <div>
                    <div className="text-white">{item?.desc}</div>
                    <div>
                      <img
                        onClick={() => renderScreens03()}
                        src={item?.img}
                      ></img>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default S02Screen;
