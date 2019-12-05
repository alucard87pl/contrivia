import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.quizWindowHandler = this.quizWindowHandler.bind(this);
  }

  quizWindowHandler() {
    window.open(
      "localhost:3000",
      "Data",
      "height=screen.height,width=screen.width"
    );
  }

  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>ConTrivia</Navbar.Brand>
          <Button variant='danger' onClick={this.quizWindowHandler}>
            SPAWN QUIZ WINDOW
          </Button>
        </Navbar>
      </div>
    );
  }
}
