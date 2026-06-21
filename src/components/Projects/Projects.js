import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import taskManagement from "../../Assets/Projects/codeEditor.png";
import chatApplication from "../../Assets/Projects/chatify.png";
import ecommercePlatform from "../../Assets/Projects/blog.png";

const githubProfile = "https://github.com/VinithKumar2107";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the MERN stack projects I have developed recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskManagement}
              isBlog={false}
              title="Task Management Application"
              description="A full-stack MERN task management application for creating, organizing, updating, and tracking tasks. Built with React.js, Node.js, Express.js, and MongoDB to support a clean workflow and scalable backend structure."
              ghLink={githubProfile}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatApplication}
              isBlog={false}
              title="WhatsApp-like Real-Time Chat Application"
              description="A real-time chat application inspired by WhatsApp, built with the MERN stack. It focuses on instant messaging, responsive chat UI, and backend communication for live conversation features."
              ghLink={githubProfile}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommercePlatform}
              isBlog={false}
              title="E-Commerce Platform"
              description="A MERN stack e-commerce platform with product browsing, cart-style shopping flow, and backend APIs for managing application data. Designed as a practical full-stack web application."
              ghLink={githubProfile}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
