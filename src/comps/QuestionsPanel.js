import React, { Component } from "react";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import QuestionPicker from "./QuestionPicker";

export class QuestionsPanel extends Component {
  render() {
    return (
      <Alert variant='dark'>
        <Alert.Heading>
          <div className='d-flex justify-content-between'>
            Questions
            <ButtonGroup>
              <Button variant='success'>Load Questions</Button>
              <Button variant='warning'>UNDO mark</Button>
              <Button variant='danger'>RESET QUESTIONS</Button>
            </ButtonGroup>
          </div>
        </Alert.Heading>
        <hr />
        <QuestionPicker />
      </Alert>
    );
  }
}

export default QuestionsPanel;
