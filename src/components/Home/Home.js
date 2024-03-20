import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/bg1.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 0 }} className="heading">
                Hello There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Frankline Kiplangat</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={4}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ height: "", width: "900px", borderRadius:"40%"}}
              />
            </Col>
          </Row>
          
        </Container>
        <Home2 />
      </Container>
    </section>
  );
}

export default Home;
