import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import skeddual from "../../Assets/Projects/skeddual.PNG";
import travel from "../../Assets/Projects/travel.PNG";
import cologixs from "../../Assets/Projects/cologixs.PNG";
import uniconnect from "../../Assets/Projects/uniconnect.PNG";
import appsvilla from "../../Assets/Projects/appsvilla.PNG";
import scaneMe from "../../Assets/Projects/scanme.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uniconnect}
              isBlog={false}
              title="Uniconnect"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scaneMe}
              isBlog={false}
              title="Scane Me"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cologixs}
              isBlog={false}
              title="Cologixs Website"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={skeddual}
              isBlog={false}
              title="Skeddual Site"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={appsvilla}
              isBlog={false}
              title="AppsVilla Website"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Website"
              description=""
              ghLink="https://github.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
