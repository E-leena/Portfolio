import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResumeCard from "./ServicesCards";
import Particle from "../Particle";
import Css from "../../Assets/Projects/css.jpg";
import Github from "../../Assets/Projects/github.jpg";
import Html from "../../Assets/Projects/html.jpg";
import Bootstrap from "../../Assets/Projects/bootstrap.png";
import Javascript from "../../Assets/Projects/js.jpg";
import Reacts from "../../Assets/Projects/react.png";


function ResumeNew(props) {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My  <strong className="purple">Services </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a the services which I provide.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card ">
            <ResumeCard
              imgPath={Html} 
              isBlog={false}
              title="Html"
              description="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              imgPath={Css}
              isBlog={false}
              title="Css"
              description="Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              imgPath={Bootstrap}
              isBlog={false}
              title="Bootstrap"
              description="Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development."
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              imgPath={Javascript}
              isBlog={false}
              title="Javascript"
              description="JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              imgPath={Reacts}
              isBlog={false}
              title="React"
              description="React is a free and open-source front-end JavaScript library for building user interfaces based on components. "
            />
          </Col>

          <Col md={4} className="project-card">
            <ResumeCard
              imgPath={Github}
              isBlog={false}
              title="GitHub"
              description="GitHub, Inc. is an AI-powered developer platform that allows developers to create, store, and manage their code."
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </div>
  );
}

export default ResumeNew;
