import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Vinith Kumar</span> from{" "}
            <span className="purple">Tamil Nadu, India</span>.
            <br />
            I am a passionate{" "}
            <span className="purple">MERN Stack Developer</span> with experience
            building full-stack web applications and scalable backend systems.
            <br />
            I have developed several projects using the MERN stack, including a{" "}
            <span className="purple">Task Management Application</span>, a{" "}
            <span className="purple">WhatsApp-like Real-Time Chat Application</span>,
            and an <span className="purple">E-Commerce Platform</span>.
            <br />
            <br />
            My technical skills include{" "}
            <span className="purple">MongoDB, Express.js, React.js, Node.js</span>,
            along with <span className="purple">Java</span>,{" "}
            <span className="purple">Git & GitHub</span>, and{" "}
            <span className="purple">Postman</span>.
            <br />
            I enjoy learning new technologies and building solutions that solve
            real-world problems.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Building Full-Stack Web Applications 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Solving DSA Problems in Java 🚀
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and Backend Technologies 🤖
            </li>
          </ul>

          <p style={{ color: "rgb(218 132 140)" }}>
            "Code, Learn, and Build Solutions That Matter!"
          </p>

          <footer className="blockquote-footer">Vinith Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
