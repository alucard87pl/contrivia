import React, { Component } from "react";
import { Button } from "react-bootstrap";

export class QuestionPane extends Component {
  render() {
    return (
      <div>
        <hr />
        <h3>Easy</h3>
        <Button>TEST</Button>
        <h3>Medium</h3>
        <Button>TEST</Button>
        <h3>Dark Souls</h3>
        <Button>TEST</Button>
      </div>
    );
  }
}

export default QuestionPane;
