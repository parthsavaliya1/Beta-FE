import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { addGrayClass } from "../../utils";
import "./s8.css";

const S08Screen = () => {
  useEffect(() => {
    addGrayClass();
  }, []);

  const handleBack = () => {
    window.history.back();
  };
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col>
          <div className="s02-main s08-main">
            <div className="s02-main-layout">
              <div className="padding-0-48">
                <div className="text-center m-0 mb-44">
                  <h1>About the Newspapers Collection</h1>
                </div>
                <div className="common-text block-816">
                  <p>
                    Many national libraries cooperate within the National
                    Libraries Section of the International Federation of Library
                    Associations and Institutions (IFLA) to discuss their common
                    tasks, define and promote common standards, and carry out
                    projects helping them to fulfill their duties. The national
                    libraries of Europe participate in The European Library
                    which is a service of the Conference of European National
                    Librarians (CENL).
                  </p>

                  <p>
                    Many public libraries also serve as community organizations
                    that provide free services and events to the public, such as
                    reading groups and toddler story time. For many communities,
                    the library is a source of connection to a vast world,
                    obtainable knowledge and understanding, and entertainment.
                    According to a study by the Pennsylvania Library
                    Association, public library services play a major role in
                    fighting rising illiteracy rates among youths. Public
                    libraries are protected and funded by the public they serve.
                  </p>

                  <p>
                    Library 2.0, a term coined in 2005, is the library’s
                    response to the challenge of Google and an attempt to meet
                    the changing needs of users by using Web 2.0 technology.
                    Some of the aspects of Library 2.0 include, commenting,
                    tagging, bookmarking, discussions, use of online social
                    networks by libraries, plug-ins, and widgets. Inspired by
                    Web 2.0, it is an attempt to make the library a more
                    user-driven institution.
                  </p>

                  <p>
                    Academic libraries are generally located on college and
                    university campuses and primarily serve the students and
                    faculty of that and other academic institutions. Some
                    academic libraries, especially those at public institutions,
                    are accessible to members of the general public in whole or
                    in part. Library services are sometimes extended to the
                    general public at a fee, some academic libraries create such
                    services in order to enhance literacy levels in their
                    communities.
                  </p>

                  <p>
                    Specific course-related resources are usually provided by
                    the library, such as copies of textbooks and article
                    readings held on ‘reserve’ (meaning that they are loaned out
                    only on a short-term basis, usually a matter of hours). Some
                    academic libraries provide resources not usually associated
                    with libraries, such as the ability to check out laptop
                    computers, web cameras, or scientific calculators.
                  </p>
                </div>
                <div className="back d-flex footer-leg">
                  <div className="d-flex">
                    <p className="m-0 back-arrow" onClick={() => handleBack()}>
                      ← Back
                    </p>

                    <div className="d-flex">
                      <a href="" className="active">
                        En
                      </a>
                      <a href="" className="mr-ml-10">
                        /
                      </a>{" "}
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
          </div>
          <div className="square"></div>
        </Col>
      </Row>
    </Container>
  );
};

export default S08Screen;
