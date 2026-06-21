import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumeFile from "../../Assets/Vinith_Kumar_ATS_Resume.docx";
import { AiOutlineDownload } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <div className="resume-download-card">
            <CgFileDocument className="resume-download-icon" />
            <h1>
              Vinith Kumar <span className="purple">Resume</span>
            </h1>
            <p>
              Download my ATS-friendly resume in Word document format.
            </p>
            <Button
              variant="primary"
              href={resumeFile}
              download="Vinith_Kumar_ATS_Resume.docx"
              style={{ maxWidth: "260px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download Resume
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
