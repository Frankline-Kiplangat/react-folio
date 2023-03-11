import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            
            I am <span className="purple"> Frankline Kiplangat </span>
            from <span className="purple"> Kenya.</span>
            <br />I am a Fullstack Developer. I studied at The University of Nairobi and Moringa School.

            <br />
            People find me to be an upbeat, self-motivated team player with excellent communication skills. 
            I enjoy the collaborative nature of working on a team building a product. 
            I'm ready to jump onto a supportive team and begin contributing.
            <br />
            Apart from coding, These are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Swimming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everything is possible, sacrifice for better tomorrow!"{" "}
          </p>
          <footer className="blockquote-footer">Mr. Avocado</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
