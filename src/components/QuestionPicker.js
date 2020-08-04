import React from 'react'
import { Tabs, Tab, Button } from 'react-bootstrap'

const QuestionPicker = () => (
  <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
    <Tab eventKey='home' title='Category 1'>
      <div>
        <h3>Easy</h3>
        <Button>TEST</Button>
        <h3>Medium</h3>
        <Button>TEST</Button>
        <h3>Dark Souls</h3>
        <Button>TEST</Button>
      </div>
    </Tab>
    <Tab eventKey='profile' title='Category 2'/>
  </Tabs>
)

export default QuestionPicker
