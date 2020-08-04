import React, { createContext, useContext, useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import * as PropTypes from 'prop-types'
import { TeamsContext } from './TeamsProvider'

export const TeamInputModalContext = createContext({})

const TeamInputModalProvider = ({ children }) => {
  const { teams } = useContext(TeamsContext)

  const [inputModalOpen, setInputModalOpen] = useState(false)

  const values = {
    inputModalOpen,
    setInputModalOpen
  }

  return (
    <TeamInputModalContext.Provider value={values}>
      {children}
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
    </TeamInputModalContext.Provider>
  )
}

TeamInputModalProvider.propTypes = {
  children: PropTypes.node
}

export default TeamInputModalProvider
