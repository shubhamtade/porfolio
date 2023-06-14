import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mbaChaiWala from "../../Assets/Projects/mba.gif";
import Pikflex from "../../Assets/Projects/pikflex.gif";

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
              imgPath={mbaChaiWala}
              isBlog={false}
              title="MBA Chai Wala - Clone"
              description="MBA Chai Wala Clone is a React Vite project replicating the popular Chai Wala brand website."
              ghLink="https://github.com/shubhamtade/MBA-Chai-Wala-Clone"
              demoLink="https://mba-chai-wala-clone.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pikflex}
              isBlog={false}
              title="PikFlex"
              description="PikFlex, The ultimate movie and TV show app. Discover, rate, and discuss your favorite films."
              ghLink="https://github.com/shubhamtade/pikflex"
              demoLink="https://pikflex.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
