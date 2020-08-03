import React, { Component } from "react";
import { Alert, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrashAlt,
  faPlus,
  faMinus,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import TeamNameModal from "./TeamNameModal";

export class TeamTable extends Component {
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
      <Alert key={TeamTable} variant={"dark"}>
        <Alert.Heading>Teams</Alert.Heading>
        <hr />
        <Table striped bordered hover size='sm'>
          <thead>
            <tr>
              <th>NOW</th>
              <th>#</th>
              <th>Team Name</th>
              <th style={{ textAlign: "center" }}>Points</th>
              <th style={{ textAlign: "center" }}>
                <Button size={"sm"} onClick={this.props.teamRotate.bind(this)} block>
                  NEXT
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.teams.sort((a, b) => b.teamPoints - a.teamPoints).map((teams, i) => {
              return (
                <tr key={i}>
                  <td>
                    <Button
                      onClick={this.props.setCurrentTeam.bind(this)}
                      block
                      size={"sm"}
                      ct={i}
                      variant={
                        this.props.currentTeam === i
                          ? "success"
                          : "outline-success"
                      }
                    >
                      <FontAwesomeIcon icon={faPlay} />
                    </Button>
                  </td>
                  <td>{i + 1}</td>
                  <td
                    style={
                      this.props.currentTeam === i
                        ? { fontWeight: "bold" }
                        : null
                    }
                  >
                    {teams.teamName}
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <div className='d-flex justify-content-between'>
                      <Button
                        teamid={i}
                        pointsaction='inc'
                        size='sm'
                        variant='success'
                        onClick={this.props.teamPointsChange.bind(this)}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </Button>
                      {teams.teamPoints}
                      <Button
                        teamid={i}
                        pointsaction='dec'
                        size='sm'
                        variant='danger'
                        onClick={this.props.teamPointsChange.bind(this)}
                      >
                        <FontAwesomeIcon icon={faMinus} />
                      </Button>
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Button value={i} size='sm' variant='warning'>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button
                      value={i}
                      size='sm'
                      variant='danger'
                      onClick={this.props.removeTeam.bind(this)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan='4' style={{ textAlign: "center" }}>
                <Button block size='sm' onClick={this.props.teamModalHandler}>
                  Add Team #{this.props.teams.length + 1}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <TeamNameModal
          addTeam={this.props.addTeam}
          onHide={this.props.teamModalHandler}
          show={this.props.teamModalOpen}
          teamNumber={this.props.teams.length + 1}
        />
      </Alert>
    );
  }
}

export default TeamTable;
