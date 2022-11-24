import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { addGrayClass } from '../../utils'
import './s6.css'

class S06Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenImage: 1,
    }
  }

  componentDidMount() {
    addGrayClass()
  }

  handleImageChangeRight = () => {
    this.setState({
      screenImage: 2,
    })
  }

  handleImageChangeLeft = () => {
    this.setState({
      screenImage: 1,
    })
  }

  render() {
    const { screenImage } = this.state
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col>
            <div className="s02-main s06-main padding-0">
              <div className="s03-main-layout">
                <div className="">
                  <div>
                    <div>
                      <div class="text-center sticky-header">
                        <div class="mb-51">
                          <div class="font-size-18 mb-7">BILLBOARD</div>
                          <div class="font-size-18">
                            From the Library Newspapers Collection
                          </div>
                        </div>
                        <div class="img-frame-text text-center font-MasadaMedium mb-10">
                          Children’s Press
                        </div>
                        <h1 class="">Dreaming of a Country</h1>
                      </div>
                      {/* <div>BILLBOARD</div>
                      <div>From the Library Newspapers Collection</div>
                      <div>Children's Press</div>
                      <div>Dreaming of a Country</div> */}
                      <div className="d-flex mt-41">
                        <div className="s4-border-right">
                          <div className="left-side-b">
                            <div className="block-sub-title">1/9</div>
                            <div className="m-tb">
                              <span>
                                <div>◼ About</div>
                              </span>
                            </div>
                            <div className="common-text text-center mb-36 medium-f-line-height">
                              "My Son Has Already Grown Up" – Davar Leyladim
                              reports on the Holocaust
                            </div>
                            <div className="common-text font-size-14 mb-27">
                              <p className="m-0">
                                3.12.1942, Hebrew, Davar Leyladim (weekly), Tel
                                Aviv, Mandatory Land of Israel
                              </p>
                            </div>
                            <div className="common-text font-size-14 mb-78">
                              <p className="m-0">
                                On November 23, 1942, a statement was published
                                by the Jewish Agency's management, on reliable
                                news that the Nazis had begun exterminating the
                                Jews in Poland. A week and a half later, "A
                                Thing for Children" announced to its young
                                readers the horror that is taking place in
                                Europe with remarkable notoriety. Editor Yitzhak
                                Yatziv opened the front page with lamentations
                                about "our tortured brothers who are killed by
                                the Nazi murderers." The poet Samson Meltzer
                                wrote in an appeal to his son that although he
                                wanted to write a Hanukkah singer for him".
                              </p>
                            </div>
                            <div>◼ Author</div>
                            <div className="author-margin">Yitzhak Yatziv</div>
                            <div className="common-text font-size-14 mb-78">
                              <p>
                                (1890-1947) One of the founders of "Thing for
                                Children", a teacher and educator. Edited the
                                paper continuously for about sixteen years,
                                until its last day. The weekly section he signed
                                was called "In the Circle of Days" and in it he
                                opened the issues of "A Thing for Children."
                                Established and nurtured generations of
                                children's creators and left his mark on
                                children's literature in the country.
                              </p>
                            </div>

                            <div>◼ Source</div>
                            <div className="author-margin">Davar Leyladim</div>
                            <div className="common-text font-size-14 mb-78">
                              <p>
                                Davar's children's newspaper has been one of the
                                most prominent and important children's
                                newspapers for over 50 years. Generations upon
                                generations of children have grown up on it and
                                read it, and it would not be an exaggeration to
                                say that it was one of the important and
                                influential media outlets shaping the generation
                                of children of the pre-eminent and early days of
                                the State of Israel.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="s4-border-left block-space-between">
                          <div>
                            <div>
                              {screenImage === 1 ? (
                                <img
                                  src={'/Images/big-img.png'}
                                  className="img-responsive mx-auto"
                                />
                              ) : (
                                <img
                                  src={'/Images/s05_2.png'}
                                  className="img-responsive mx-auto"
                                />
                              )}
                            </div>
                            <div className="d-flex justify-content-space-between align-item-center">
                              <div className="s06-text-width common-text font-size-14">
                                <p>
                                  "My Son Has Already Grown Up" – Davar Leyladim
                                  reports on the Holocaust
                                </p>
                              </div>
                              <div className="block-title">{`${screenImage}/2`}</div>
                            </div>
                            <div>Collections</div>
                          </div>

                          <div>
                            <div className="d-flex s06-bottom-bar">
                              <div
                                className="text-white"
                                onClick={() => this.handleImageChangeRight()}
                              >
                                <img
                                  className="img-responsive mr-12"
                                  src="/Images/previous.png"
                                />
                              </div>
                              <div
                                className="text-white"
                                onClick={() => this.handleImageChangeLeft()}
                              >
                                <img
                                  className="img-responsive mr-12"
                                  src="/Images/next.png"
                                />
                              </div>
                              <div className="text-white">
                                <img
                                  className="img-responsive"
                                  src="/Images/expand.png"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mtb-20">
                    <div className="border-bottom-2"></div>
                  </div>
                  <div class="d-flex s6-over-hidden">
                    <div class="s4-border-right">
                      <div class="left-side-b">
                        <div className="block-sub-title">2/9</div>
                        <div className="m-tb">
                          <span>
                            <div>◼ About</div>
                          </span>
                        </div>
                        <div className="common-text text-center mb-36 medium-f-line-height">
                          Ghetto Rebels
                        </div>
                        <div className="common-text font-size-14 mb-27">
                          <p className="m-0">
                            3.12.1942, Hebrew, Davar Leyladim (weekly), Tel
                            Aviv, Mandatory Land of Israel
                          </p>
                        </div>
                        <div className="common-text font-size-14 mb-78">
                          <p className="m-0">
                            On November 23, 1942, a statement was published by
                            the Jewish Agency's management, on reliable news
                            that the Nazis had begun exterminating the Jews in
                            Poland. A week and a half later, "A Thing for
                            Children" announced to its young readers the horror
                            that is taking place in Europe with remarkable
                            notoriety. Editor Yitzhak Yatziv opened the front
                            page with lamentations about "our tortured brothers
                            who are killed by the Nazi murderers." The poet
                            Samson Meltzer wrote in an appeal to his son that
                            although he wanted to write a Hanukkah singer for
                            him".
                          </p>
                        </div>
                        <div>◼ Author</div>
                        <div className="author-margin">Yitzhak Yatziv</div>
                        <div className="common-text font-size-14 mb-78">
                          <p>
                            (1890-1947) One of the founders of "Thing for
                            Children", a teacher and educator. Edited the paper
                            continuously for about sixteen years, until its last
                            day. The weekly section he signed was called "In the
                            Circle of Days" and in it he opened the issues of "A
                            Thing for Children." Established and nurtured
                            generations of children's creators and left his mark
                            on children's literature in the country.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="s4-border-left block-space-between">
                      <div>
                        <img
                          src="/Images/s06-second.png"
                          className="img-responsive mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="plus-number">
                    <button className="read-btn num-of-img">7+</button>
                  </div>
                  {/* <div className="mtb-20">
                    <div className="border-bottom-2"></div>
                  </div> */}

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
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default S06Screen
