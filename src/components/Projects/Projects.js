import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import akan from "../../Assets/Projects/project3.png";
import quotes from "../../Assets/Projects/project6.png";
import clone from "../../Assets/Projects/project1.png";
import gallery from "../../Assets/Projects/project2.png";
import psl from "../../Assets/Projects/psl.jpeg";
import ridge from "../../Assets/Projects/ridge.jpeg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={akan}
              isBlog={false}
              title="Akan Names"
              description="This web application takes user's birthdays and calculates
               the day of the week they were born and then depending on their gender outputs their Akan Name."
              ghLink="https://github.com/Frankline-Kiplangat/akan-names"
              demoLink="https://frankline-kiplangat.github.io/akan-names/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quotes}
              isBlog={false}
              title="Quotes App"
              description="Application where users can create quotes and have those quotes
               voted on whether they are terrible or are inspirational. User can add as many quotes as possible."
               ghLink="https://github.com/Frankline-Kiplangat/git-awwards"
              demoLink="https://frankline-kiplangat.github.io/Quotes-App/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={psl}
              isBlog={false}
              title="Psl"
              description="Health Provider WEbsite "
              ghLink="https://github.com/Frankline-Kiplangat/psl"
              demoLink="https://psl-frankline-kiplangat.vercel.app/"              
            />
            
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clone}
              isBlog={false}
              title="Instagram Clone"
              description="This is an Instagram clone app where users can register, login and upload images."
              ghLink="https://github.com/Frankline-Kiplangat/instagram-app"
              demoLink="https://frank-instagram-app.herokuapp.com/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="Personal Gallery"
              description="Gallery that displays my photos for others to see. You can click on a single photo to view details."
              ghLink="https://github.com/Frankline-Kiplangat/personal-gallery"
              demoLink="https://frank-personal-gallery.herokuapp.com"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ridge}
              isBlog={false}
              title="fifthridge"
              description="Event planner app"
              ghLink="https://github.com/Frankline-Kiplangat/fifthridge"
              demoLink="https://frankline-kiplangat.github.io/fifthridge"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
