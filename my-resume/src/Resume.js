import React from "react";
import { Container, Row, Col, Card, ListGroup, Button, Accordion } from "react-bootstrap";

const Resume = () => {
  return (
    <Container className="mt-4">
      <Card className="mb-4 text-center">
        <Card.Body>
          <h2>Athul N</h2>
          <p>athulnecholiclt@gmail.com |  +91 9072963484</p>
          <p>🔗 <a href="https://www.linkedin.com/in/athul-necholi-878974237/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h3>Profile Summary</h3>
          <p>
            IT Service Desk Professional with 4+ years of technical support experience, including 2+ years as a lead.
            Expertise in ITSM tools, SLA management, debugging, and operations excellence.
          </p>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <h3>Key Skills</h3>
          <ListGroup>
            <ListGroup.Item>Cloud: Azure</ListGroup.Item>
            <ListGroup.Item>Ticketing Tools: ServiceNow, Microsoft IMP</ListGroup.Item>
            <ListGroup.Item>Programming: C#, Python, JavaScript</ListGroup.Item>
            <ListGroup.Item>Web Development: React, Bootstrap, HTML, CSS</ListGroup.Item>
            <ListGroup.Item>Databases: SQL</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Professional Experience</Accordion.Header>
          <Accordion.Body>
            <Card className="mb-3">
              <Card.Body>
                <h4>Systems Engineer - Infosys Ltd, Pune</h4>
                <p><strong>Technical Operations Associate – Dynamics 365 CRM (Feb 2020 – Present)</strong></p>
                <ul>
                  <li>Resolved 3000+ tickets efficiently, ensuring SLA compliance.</li>
                  <li>Led a team of 7+ engineers, improving CSAT and first-call resolution rates.</li>
                  <li>Optimized ticketing operations, reducing AHT and shrinkage.</li>
                </ul>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <h4>Project: L3 Support Engineer – Microsoft Invoice Portal (Mar 2024 – Sep 2024)</h4>
                <ul>
                  <li>Investigated technical issues via SNOW/ICM and Azure log analysis.</li>
                  <li>Executed SQL queries to troubleshoot system errors.</li>
                  <li>Developed knowledge base documentation for recurring issues.</li>
                </ul>
              </Card.Body>
            </Card>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Card className="mt-4 mb-4">
        <Card.Body>
          <h3>Education</h3>
          <p><strong>BCA, College of Applied Science IHRD</strong> - 2020 (Calicut University)</p>
        </Card.Body>
      </Card>

      
      <Card className="mb-4">
        <Card.Body>
          <h3>Certifications</h3>
          <ListGroup>
            <ListGroup.Item>Infosys Certified C# Programmer</ListGroup.Item>
            <ListGroup.Item>Infosys Certified Python Programmer</ListGroup.Item>
            <ListGroup.Item>Microsoft Certified Azure Fundamentals (AZ-900)</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Awards & Recognition */}
      <Card className="mb-4">
        <Card.Body>
          <h3>Awards & Recognition</h3>
          <ListGroup>
            <ListGroup.Item>Recognized as SME for BTS team, received Certificate of Appreciation (2024 Client Visit).</ListGroup.Item>
            <ListGroup.Item>ISTA Award for excellent KPI performance.</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Soft Skills */}
      <Card className="mb-4">
        <Card.Body>
          <h3>Soft Skills</h3>
          <ListGroup>
            <ListGroup.Item>Excellent communication & interpersonal skills</ListGroup.Item>
            <ListGroup.Item>Strong problem-solving abilities</ListGroup.Item>
            <ListGroup.Item>Confidence in handling complex technical challenges</ListGroup.Item>
            <ListGroup.Item>Team collaboration & leadership</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/* Download Resume Button */}
      <div className="text-center">
        <Button variant="primary" href="path-to-your-resume.pdf" download>
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default Resume;
