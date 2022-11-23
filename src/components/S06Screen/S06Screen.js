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
            <div className="s02-main pt-0">
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
                            <div className="common-text text-center mb-36">
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
                            <div>Yitzhak Yatziv</div>
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
                            <div>Davar Leyladim</div>
                            <div>
                              Davar's children's newspaper has been one of the
                              most prominent and important children's newspapers
                              for over 50 years. Generations upon generations of
                              children have grown up on it and read it, and it
                              would not be an exaggeration to say that it was
                              one of the important and influential media outlets
                              shaping the generation of children of the
                              pre-eminent and early days of the State of Israel.
                            </div>
                          </div>
                        </div>
                        <div className="s4-border-left">
                          <div>
                            {screenImage === 1 ? (
                              <img
                                src={'/Images/big-img.png'}
                                className="img-responsive"
                              />
                            ) : (
                              <img
                                src={'/Images/s05_2.png'}
                                className="img-responsive"
                              />
                            )}
                          </div>
                          <div>
                            <div>
                              "My Son Has Already Grown Up" – Davar Leyladim
                              reports on the Holocaust
                            </div>
                            <div className="text-white">{`${screenImage}/2`}</div>
                          </div>
                          <div>Collections</div>
                          <div>
                            <div
                              className="text-white"
                              onClick={() => this.handleImageChangeRight()}
                            >
                              +
                            </div>
                            <div
                              className="text-white"
                              onClick={() => this.handleImageChangeLeft()}
                            >
                              -
                            </div>
                            <div className="text-white">*</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mtb-20">
                    <div className="border-bottom-2"></div>
                  </div>
                  <div>
                    <div>
                      <div>2/9</div>
                      <div>◼ Author</div>

                      <div>Ghetto Rebels</div>
                      <div>
                        3.12.1942, Hebrew, Davar Leyladim (weekly), Tel Aviv,
                        Mandatory Land of Israel
                      </div>
                      <div>
                        On November 23, 1942, a statement was published by the
                        Jewish Agency's management, on reliable news that the
                        Nazis had begun exterminating the Jews in Poland. A week
                        and a half later, "A Thing for Children" announced to
                        its young readers the horror that is taking place in
                        Europe with remarkable notoriety. Editor Yitzhak Yatziv
                        opened the front page with lamentations about "our
                        tortured brothers who are killed by the Nazi murderers."
                        The poet Samson Meltzer wrote in an appeal to his son
                        that although he wanted to write a Hanukkah singer for
                        him".
                      </div>
                    </div>
                    <div>
                      <img src="/Images/s05_2.png" />
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
