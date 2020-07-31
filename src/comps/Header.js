import React, { Component } from "react";
import { Navbar, Button } from "react-bootstrap";

export default class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>ConTrivia</Navbar.Brand>
          <Button onClick={this.props.projectorWindowOpen} variant='danger'>SPAWN QUIZ WINDOW</Button>
          &nbsp;
          <Button onClick={this.props.projectorModeToggle}
            variant='danger'>MODE: {this.props.mode ? "RANKING" : "QUESTION"}</Button>

        </Navbar>
      </div>
    );
  }
}
