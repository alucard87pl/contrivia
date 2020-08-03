import React, { Component } from "react";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

export default class TeamNameModal extends Component {
  constructor(props) {
    super(props);

    this.state = { teamName: "" }
  }
  nameChange = e => {
    this.setState({ teamName: e.target.value });
  };

  submit = () => {
    this.props.addTeam(this.state.teamName);
    this.setState({ teamName: "", teamNumber: this.props.teamNumber + 1 });
  };

  render() {
    return (
      <Modal
        show={this.props.show}
        animation={true}
        backdrop={"static"}
        submit={this.props.onSubmit}
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title>{"Add Team #" + this.props.teamNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} controlId='teamName'>
            <Form.Label column sm='3'>
              Team Name
            </Form.Label>
            <Col sm='9'>
              <Form.Control
                type='text'
                value={this.state.teamName}
                placeholder={"Team #" + this.props.teamNumber}
                onChange={this.nameChange}
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant='success'
            disabled={this.state.teamName.length >= 3 ? false : true}
            onClick={this.submit}
          >
            Add Team
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
