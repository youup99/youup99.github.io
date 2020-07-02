import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import logo from "../public/logo.png";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from '@material-ui/icons/Email';
import Resume from "../public/Resume.pdf";

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar bg="white" sticky="top" expand="md">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="my logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav activeKey="#home" className="mr-auto">
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#experience">Experience</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Button variant="outline-primary" href={Resume} target="_blank">Resume</Button>
              </Nav.Item>
              <Nav.Item>
                <IconButton
                  href="https://github.com/youup99"
                  target="_blank"
                  aria-label="github"
                >
                  <GitHubIcon />
                </IconButton>
              </Nav.Item>
              <Nav.Item>
                <IconButton
                  href="https://www.linkedin.com/in/david-kim7/"
                  target="_blank"
                  aria-label="linkedin"
                >
                  <LinkedInIcon />
                </IconButton>
              </Nav.Item>
              <Nav.Item>
                <IconButton
                  href="mailto:youup99@gmail.com"
                  aria-label="email"
                >
                  <EmailIcon />
                </IconButton>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
