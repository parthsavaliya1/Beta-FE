import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './s4.css'

class S04Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screen: 1,
    }
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div className="s04-main">
              <div className="s03-main-layout">
                <div className="text-center">
                  <div className="mb-51">
                    <div className="font-size-18 mb-7">BILLBOARD</div>
                    <div className="font-size-18">
                      From the Library Newspapers Collection
                    </div>
                  </div>
                  <h1 className="">Children’s Press</h1>
                  <div className="text-content-width mb-56">
                    The Hebrew children’s press was a tremendous enterprise of
                    creating culture and language. From the beginning of the
                    20th century, Hebrew children’s newspapers occupied a
                    central place in the cultural existence, until it is
                    difficult to imagine the lives of children in Eretz Israel
                    without it.
                  </div>
                </div>
                <div className="d-flex two-side-block">
                  <div className="s4-border-right">
                    <div className="s4-block-width">
                      <div>
                        <div>
                          <img
                            src={'/Images/Zerubbabel Gilad.png'}
                            className="img-responsive"
                          ></img>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="number">I</div>
                        <div className="title-text">
                          Creators Create Culture
                        </div>
                      </div>
                      <div className="text-decs">
                        One of the salient features of the early children’s
                        press is the abundance of well-known and prominent
                        creators who …
                      </div>
                      <button className="read-btn mb-mt-36">Read More</button>
                    </div>
                    <div className="s4-block-width">
                      <div>
                        <img
                          src={'/Images/Zerubbabel Gilad04.png'}
                          className="img-responsive"
                        ></img>
                      </div>
                      <div className="text-center">
                        <div className="number">III</div>
                        <div className="title-text">
                          Children Dream of a Country
                        </div>
                      </div>
                      <div className="text-decs">
                        The flourishing of the Hebrew children’s press occurred
                        in the years when Israel changed its face. A Holocaust
                        took …
                      </div>
                      <button className="read-btn mb-mt-36">Read More</button>
                    </div>
                  </div>
                  <div className="s4-border-left">
                    <div className="s4-block-width">
                      <div>
                        <div>
                          <img
                            src={'/Images/Zerubbabel Giladz.png'}
                            className="img-responsive"
                          ></img>
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="number">II</div>
                        <div className="title-text">
                          Raising the Next Generation
                        </div>
                      </div>
                      <div className="text-decs">
                        The children’s magazine focused quite a bit on beauty,
                        play and fun. But there was another facet to it: …
                      </div>
                      <button className="read-btn mb-mt-36">Read More</button>
                    </div>
                  </div>
                  <div>
                    <button className="read-btn num-of-img">1+</button>
                  </div>
                </div>

                <div className="back d-flex footer-leg">
                  <div className="d-flex">
                    <p className="m-0 back-arrow">← Back</p>

                    <div className="d-flex">
                      <a href="" className="active">
                        En
                      </a>
                      <a href="" className="mr-ml-10">
                        /
                      </a>{' '}
                      <a href="">عر</a>
                      <a href="" className="mr-ml-10">
                        /
                      </a>
                      <a href="">עב</a>
                    </div>
                  </div>
                  {/* <div className="d-flex">
                    <span>
                      <span className="i-cricle">ℹ</span> About
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default S04Screen
