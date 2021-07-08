import React, { useContext } from 'react'
import { ProjectorContext } from '../providers/ProjectorProvider'
import { Alert, Button, ButtonGroup, Col, Container, Navbar, Row } from 'react-bootstrap'
import TeamTable from '../components/TeamTable'
import QuestionPicker from '../components/QuestionPicker'

const Home = () => {
  const {
    isProjectorOpen,
    setProjectorOpen,
    projectorMode,
    setProjectorMode
  } = useContext(ProjectorContext)

  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand
          href='#home'
        >
          ConTrivia
        </Navbar.Brand>
        <Button
          onClick={() => setProjectorOpen(!isProjectorOpen)}
          variant='danger'
          disabled={isProjectorOpen}
        >
          SPAWN QUIZ WINDOW
        </Button>
        <Button
          onClick={() => setProjectorMode(!projectorMode)}
          variant='danger'>
          MODE: {projectorMode ? 'RANKING' : 'QUESTION'}
        </Button>
      </Navbar>
      <Container fluid>
        <Row>
          <Col xl={3}>
            <TeamTable/>
          </Col>
          <Col>
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
              <QuestionPicker/>
            </Alert>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
