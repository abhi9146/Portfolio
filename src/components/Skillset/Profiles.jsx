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
     <Row style={{display:"flex",justifyContent:"space-evenly"}}>
      <Col xs={4} md={2} className="tech-icons" >
        <SiLeetcode />
        <div className="name">
        <a href="https://leetcode.com/abhi_9146/" className="btn btn-dark">Leetcode</a>
        </div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodeforces />
        <span className="name">
        <a href="https://codeforces.com/profile/abhi7721" className="btn btn-dark">Codeforces</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiCodechef />
        <span className="name">
        <a href="https://www.codechef.com/users/abhishek_9146" className="btn btn-dark">Codechef</a>
        </span>
      </Col>
      <Col xs={4} md={2} className="tech-icons" >
        <SiGeeksforgeeks />
        <span className="name">
        <a href="https://auth.geeksforgeeks.org/user/abhisunkarwad2002/" className="btn btn-dark">GeeksForGeeks</a>
        </span>
      </Col>
    </Row> 
  );
}

export default Techstack;
