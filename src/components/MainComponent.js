import React, { Component } from "react";
import Header from "./HeaderComponent";
import { Container, Row } from "react-bootstrap";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Experience from "./ExperienceComponent";
import Contact from "./ContactComponent";

class Main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <div id="home">
              <Home />
            </div>
          </Row>
          <Row>
            <div id="about">
              <About />
            </div>
          </Row>
          <Row>
            <div id="experience">
              <Experience />
            </div>
          </Row>
          <Row>
            <div id="contact">
              <Contact />
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
