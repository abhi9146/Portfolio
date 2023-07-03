import React from "react";
import { Col, Row } from "react-bootstrap";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGeeksforgeeks
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent:"space-evenly", paddingBottom: "30px", paddingTop:"20px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{height:"200px",objectFit:"contain", Width:"200px"}}>
        <SiLeetcode />
        <span className="name" style={{display:"flex" ,flexDirection:"column"}}>
        <a href="https://leetcode.com/abhi_9146/"><span style={{font:"20px"}}>Leetcode</span></a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{height:"200px",objectFit:"contain", Width:"200px"}}>
        <SiCodeforces />
        <span className="name">
        <a href="https://codeforces.com/profile/abhi7721">Codeforces</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{height:"200px",objectFit:"contain", Width:"200px"}}>
        <SiCodechef />
        <span className="name">
        <a href="https://www.codechef.com/users/abhishek_9146">Codechef</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{height:"200px",objectFit:"contain", Width:"200px"}}>
        <SiGeeksforgeeks />
        <span className="name">
        <a href="https://auth.geeksforgeeks.org/user/abhisunkarwad2002/">GeeksForGeeks</a>
        </span>
      </Col>
    </Row>
  );
}

export default Techstack;
