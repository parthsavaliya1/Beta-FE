import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './s7.css'

const S07Screen = () => {
  const handleZoomIn = () => {
    const element = document.getElementsByClassName('img-s07')
    element[0].style.transform = 'scale(1.2)'
    console.log(element)
  }

  const handleZoomOut = () => {
    const element = document.getElementsByClassName('img-s07')
    element[0].style.transform = 'inherit'
    console.log(element)
  }

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
                <div className="align-item-center d-flex">
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
                  <div className="text-white" onClick={() => handleZoomOut()}>
                    <span> - </span>
                  </div>
                  <div className="text-white" onClick={() => handleZoomIn()}>
                    <span> + </span>
                  </div>
                </div>
                <div className="d-flex align-item-center">
                  <div className="mr-24">1/2</div>
                  <div className="text-white">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      className="mr-12"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M0,0H48V-48H0Z"
                            fill="none"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_255"
                        data-name="Group 255"
                        transform="translate(0 48)"
                      >
                        <g
                          id="Group_169"
                          data-name="Group 169"
                          clip-path="url(#clip-path)"
                        >
                          <g
                            id="Group_168"
                            data-name="Group 168"
                            transform="translate(24 -0.75)"
                          >
                            <path
                              id="Path_46"
                              data-name="Path 46"
                              d="M0,0A23.276,23.276,0,0,0,23.25-23.25,23.276,23.276,0,0,0,0-46.5,23.276,23.276,0,0,0-23.25-23.25,23.276,23.276,0,0,0,0,0Z"
                              fill="none"
                              stroke="#000"
                              stroke-width="1.5"
                            />
                          </g>
                        </g>
                        <text
                          id="_"
                          data-name="←"
                          transform="translate(13.5 -19.98)"
                          font-size="24"
                          font-family="Masada"
                        >
                          <tspan x="0" y="0">
                            ←
                          </tspan>
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="text-white">
                    <svg width="48" height="48" viewBox="0 0 48 48">
                      <defs>
                        <clipPath id="clip-path">
                          <path
                            id="Path_47"
                            data-name="Path 47"
                            d="M0,0H48V-48H0Z"
                            fill="none"
                          />
                        </clipPath>
                      </defs>
                      <g
                        id="Group_256"
                        data-name="Group 256"
                        transform="translate(0 48)"
                      >
                        <g
                          id="Group_169"
                          data-name="Group 169"
                          clip-path="url(#clip-path)"
                        >
                          <g
                            id="Group_168"
                            data-name="Group 168"
                            transform="translate(24 -0.75)"
                          >
                            <path
                              id="Path_46"
                              data-name="Path 46"
                              d="M0,0A23.276,23.276,0,0,0,23.25-23.25,23.276,23.276,0,0,0,0-46.5,23.276,23.276,0,0,0-23.25-23.25,23.276,23.276,0,0,0,0,0Z"
                              fill="none"
                              stroke="#000"
                              stroke-width="1.5"
                            />
                          </g>
                        </g>
                        <text
                          id="_"
                          data-name="→"
                          transform="translate(13.5 -19.98)"
                          font-size="24"
                          font-family="Masada"
                        >
                          <tspan x="0" y="0">
                            →
                          </tspan>
                        </text>
                      </g>
                    </svg>
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

export default S07Screen
