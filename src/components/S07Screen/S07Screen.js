import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './s7.css'

const S07Screen = () => {
  const handleZoomIn = () => {
    const element = document.getElementsByClassName('img-s07')
    element[0].style.transform = 'scale(1.5)'
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
                <img className="img-responsive" src="/Images/big-img.png" />
              </div>
              <div>
                <div className="text-white">Close</div>
                <div>
                  <div className="text-white" onClick={() => handleZoomOut()}>
                    -
                  </div>
                  <div className="text-white" onClick={() => handleZoomIn()}>
                    +
                  </div>
                </div>
                <div>
                  <div className="text-white">1/2</div>
                  <div className="text-white">Left</div>
                  <div className="text-white">Right</div>
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
