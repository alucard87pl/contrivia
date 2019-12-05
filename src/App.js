import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./comps/Header";
import { Container, Row, Col } from "react-bootstrap";
import TeamTable from "./comps/TeamTable";
import QuestionsPanel from "./comps/QuestionsPanel";

function App() {
  return (
    <div className='App'>
      <Header />
      <br />
      <Container fluid>
        <Row>
          <Col xl={3}>
            <TeamTable />
          </Col>
          <Col>
            <QuestionsPanel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
