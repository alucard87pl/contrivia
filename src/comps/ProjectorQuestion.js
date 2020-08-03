import React, { Component } from "react";
import { Alert, Table, Container, Jumbotron } from "react-bootstrap";

export class ProjectorQuestion extends Component {
  constructor(props) {
    super(props)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.changedProp !== this.props.changedProp) {
      this.setState({
        changedProp: this.props.changedProp
      });
    }
  }

  render() {
    return (
      <Alert style={{ textAlign: "center" }}>
        <Alert.Heading style={{ textAlign: "center" }}><h1>QUESTION</h1></Alert.Heading>
        <hr />
        <Jumbotron fluid>
          <Container>
            <h1>Fluid jumbotron</h1>
            <p>
              This is a modified jumbotron that occupies the entire horizontal space of
              its parent.
    </p>
          </Container>
        </Jumbotron>
      </Alert >
    );
  }
}

export default ProjectorQuestion;
