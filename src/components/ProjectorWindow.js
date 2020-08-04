import React from 'react'
import { Alert, Container, Jumbotron } from 'react-bootstrap'

const ProjectorWindow = () => (
  <Alert style={{ textAlign: 'center' }}>
    <Alert.Heading style={{ textAlign: 'center' }}>
      <h1>
        QUESTION
      </h1>
    </Alert.Heading>
    <Jumbotron fluid>
      <Container>
        <h1>
          Fluid jumbotron
        </h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
  </Alert>
)

export default ProjectorWindow
