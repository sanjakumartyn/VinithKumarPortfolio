import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiCss3, SiExpress, SiHtml5 } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";

const skills = [
  { label: "JavaScript", image: Javascript, alt: "JavaScript" },
  { label: "Java", image: Java, alt: "Java" },
  { label: "HTML", icon: <SiHtml5 color="#e34f26" fontSize="24px" /> },
  { label: "CSS", icon: <SiCss3 color="#1572b6" fontSize="24px" /> },
  { label: "React.js", image: ReactIcon, alt: "React" },
  { label: "Node.js", image: Node, alt: "Node.js" },
  { label: "Express.js", icon: <SiExpress fontSize="24px" /> },
  { label: "MongoDB", image: Mongo, alt: "MongoDB" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill) => (
        <Col xs={4} md={2} className="tech-icons" key={skill.label}>
          {skill.image ? (
            <img src={skill.image} alt={skill.alt} className="tech-icon-images" />
          ) : (
            skill.icon
          )}
          <div className="tech-icons-text">{skill.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
