import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile-photo.png";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi everyone! I'm <span className="purple">Vinith Kumar</span>{" "}
              from <span className="purple">Tamil Nadu, India</span>.
              <br />
              <br />I am a passionate{" "}
              <span className="purple">MERN Stack Developer</span> with
              experience building full-stack web applications and scalable
              backend systems.
              <br />
              <br />I have developed several projects using the MERN stack,
              including a{" "}
              <span className="purple">Task Management Application</span>, a{" "}
              <span className="purple">
                WhatsApp-like Real-Time Chat Application
              </span>
              , and an <span className="purple">E-Commerce Platform</span>.
              <br />
              <br />
              My technical skills include{" "}
              <span className="purple">
                MongoDB, Express.js, React.js, Node.js
              </span>
              , along with <span className="purple">Java</span>,{" "}
              <span className="purple">Git & GitHub</span>, and{" "}
              <span className="purple">Postman</span>.
              <br />I enjoy learning new technologies and building solutions
              that solve real-world problems.
            </p>

            <ul className="home-about-activity">
              <li>
                <ImPointRight /> Building Full-Stack Web Applications 💻
              </li>
              <li>
                <ImPointRight /> Solving DSA Problems in Java 🚀
              </li>
              <li>
                <ImPointRight /> Exploring AI and Backend Technologies 🤖
              </li>
            </ul>

            <p className="home-about-quote">
              "Code, Learn, and Build Solutions That Matter!"
            </p>
            <p className="home-about-signature">Vinith Kumar</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Vinith Kumar profile"
                style={{
                  maxHeight: "360px",
                  objectFit: "cover",
                  borderRadius: "18px",
                }}
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
