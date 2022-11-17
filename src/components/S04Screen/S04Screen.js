import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class S04Screen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 1,
    };
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div>
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
              <div>
                <div>
                  <div>
                    <div>
                      <img src={"/Images/Zerubbabel Gilad.png"}></img>
                    </div>
                  </div>
                  <div className="text-white">I</div>
                  <div className="text-white">Creators Create Culture</div>
                  <div className="text-white">
                    One of the salient features of the early children’s press is
                    the abundance of well-known and prominent creators who …
                  </div>
                  <button>Read More</button>
                  <div>
                    <img src={"/Images/Zerubbabel Gilad04.png"}></img>
                  </div>
                  <div className="text-white">III</div>
                  <div className="text-white">Children Dream of a Country</div>
                  <div className="text-white">
                    The flourishing of the Hebrew children’s press occurred in
                    the years when Israel changed its face. A Holocaust took …
                  </div>
                  <button>Read More</button>
                </div>
                <div>
                  <div>
                    <div>
                      <img src={"/Images/Zerubbabel Giladz.png"}></img>
                    </div>
                  </div>
                  <div className="text-white">II</div>
                  <div className="text-white">Raising the Next Generation</div>
                  <div className="text-white">
                    The children’s magazine focused quite a bit on beauty, play
                    and fun. But there was another facet to it: …
                  </div>
                  <button>Read More</button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default S04Screen;
