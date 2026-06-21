import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { TbBrandGithubCopilot, TbRocket } from "react-icons/tb";
import Git from "../../Assets/TechIcons/Git.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";

const tools = [
  { label: "Git", image: Git, alt: "Git" },
  { label: "GitHub", icon: <FaGithub fontSize="24px" /> },
  { label: "Postman", image: Postman, alt: "Postman" },
  { label: "VS Code", image: vsCode, alt: "VS Code" },
  {
    label: "Copilot",
    icon: <TbBrandGithubCopilot color="#7ee787" fontSize="24px" />,
  },
  { label: "Antigravity", icon: <TbRocket color="#ff4d5a" fontSize="24px" /> },
  { label: "IntelliJ", image: intelliJ, alt: "IntelliJ" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.label}>
          {tool.image ? (
            <img src={tool.image} alt={tool.alt} className="tech-icon-images" />
          ) : (
            tool.icon
          )}
          <div className="tech-icons-text">{tool.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
