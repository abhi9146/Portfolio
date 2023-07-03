import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Blog from "../assets/projects/Blog.png";
import CodeVault from "../assets/projects/pg.png";
import News from "../assets/projects/News.png";
import krypto from "../assets/projects/krypto.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={News}
              isBlog={false}
              title="News-Website"
              description="It is a online platform that delivers up-to-date news and information
              from various sources around the world.(used news api for data) ,It typically includes a variety of categories such as politics, business,
              sports, entertainment, and more. Users can access the website
              anytime and from anywhere to stay informed and engaged with the
              latest happenings."
              ghLink="https://github.com/abhi9146/NewsApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CodeVault}
              isBlog={false}
              title="CodeVault"
              description="I have Designed and developed a powerful password generator
              website using React.js, offering users the ability to effortlessly
              generate highly secure passwords according to their preferences.
              • The intuitive user interface allows individuals to customize their
              passwords by selecting desired elements such as lowercase letters,
              uppercase letters, special characters, numbers, and more.
              "
              ghLink="https://github.com/19sajib/social-media"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blog Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the Database and displayed on a user-friendly interface designed using React, Redux, and Tailwind-css for a seamless experience."
              ghLink="https://github.com/abhi9146/PostMe"
              demoLink="https://post-me.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Project Krypto"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              // ghLink="https://github.com/19sajib/Project-Krypto-Web-3.0"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects