import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import React, { useContext } from 'react'
import { TeamInputModalContext } from '../providers/TeamInputModalProvider'
import { TeamsContext } from '../providers/TeamsProvider'

const TeamInputModal = () => {
  const { teams } = useContext(TeamsContext)
  const { inputModalOpen } = useContext(TeamInputModalContext)

  return (
    <Modal
      show={inputModalOpen}
      animation
      backdrop={'static'}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {'Add Team #' + teams.length}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group
          as={Row}
          controlId='teamName'
        >
          <Form.Label column sm='3'>
            Team Name
          </Form.Label>
          <Col sm='9'>
            <Form.Control
              type='text'
              placeholder={'Team #' + teams.length}
            />
          </Col>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='success'
          disabled={!(teams.length >= 3)}
        >
          Add Team
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TeamInputModal
