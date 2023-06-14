import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Tade </span>
            from <span className="purple"> Akot, India</span>
            <br /> and Computer Engineering fresher from P. R. Pote College, Amravati.
            <br />
            Passionate about technology, problem-solving, and eager to contribute to the world of computing.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surffing Internet
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think beyond to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shubham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
