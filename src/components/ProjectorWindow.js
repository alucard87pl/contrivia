import React from 'react'
import { Alert, Container, Jumbotron, Row, Col, Button } from 'react-bootstrap'

const ProjectorWindow = () => (
  <Alert style={{ textAlign: 'center' }}>
    <Alert.Heading style={{ textAlign: 'center' }}>
      <h1>
        QUESTION
      </h1>
    </Alert.Heading>
    <Container fluid>
      <Jumbotron fluid>
        <h1>
          This is an example multiple choice question.
        </h1>
        <img
          src='https://fakeimg.pl/1280x720'
          alt='rich content'
          style={{ width: 'auto', minHeight: '500px', maxHeight: '500px' }}
        />
      </Jumbotron>

      <Row>
        <Col>
          <Button block><h1>A</h1></Button>
        </Col>
        <Col>
          <Button block><h1>A</h1></Button>
        </Col>
      </Row>
      <Row>&nbsp;</Row>
      {/* couldn't find a Row Gutter option above is to add vertical spacing */}
      <Row>
        <Col>
          <Button block><h1>A</h1></Button>
        </Col>
        <Col>
          <Button block><h1>A</h1></Button>
        </Col>
      </Row>
    </Container>
  </Alert >
)

export default ProjectorWindow
