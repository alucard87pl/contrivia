import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import QuestionPane from "./QuestionPane";

export class QuestionPicker extends Component {
  render() {
    return (
      <Tabs defaultActiveKey='home' id='uncontrolled-tab-example'>
        <Tab eventKey='home' title='Category 1'>
          <QuestionPane />
        </Tab>
        <Tab eventKey='profile' title='Category 2'></Tab>
      </Tabs>
    );
  }
}

export default QuestionPicker;
