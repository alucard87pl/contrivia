import React, { Component } from "react";
import { Alert, Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import TeamNameModal from "./TeamNameModal";

export class TeamTable extends Component {
  constructor() {
    super();

    this.addTeam = this.addTeam.bind(this);
    this.removeTeam = this.removeTeam.bind(this);
    this.teamPointsChange = this.teamPointsChange.bind(this);

    this.state = {
      addNewTeam: "",
      teamModalOpen: false,
      teams: [
        { teamName: "SOG", teamPoints: "666" },
        { teamName: "Śpiące Leniwce", teamPoints: "325" },
        { teamName: "Random Fandom", teamPoints: "0" }
      ]
    };
  }

  teamPointsChange(team) {
    var teamToModify = team.currentTarget.getAttribute("teamid");
    var teamModName = this.state.teams[teamToModify].teamName;
    var direction = team.currentTarget.getAttribute("pointsAction");
    var currentTeamPoints = this.state.teams[teamToModify].teamPoints;
    console.log(teamToModify, teamModName, direction, currentTeamPoints);
    let newState = Object.assign({}, this.state);
    switch (direction) {
      case "inc":
        console.log(teamModName + " zdobywają punkt!");
        newState.teams[teamToModify].teamPoints =
          parseInt(newState.teams[teamToModify].teamPoints) + 1;
        this.setState(newState);
        break;
      case "dec":
        console.log(teamModName + " tracą punkt!");
        newState.teams[teamToModify].teamPoints =
          parseInt(newState.teams[teamToModify].teamPoints) - 1;
        this.setState(newState);
        break;

      default:
        break;
    }
  }

  teamModalHandler = () => {
    this.setState({ teamModalOpen: !this.state.teamModalOpen });
  };

  addTeam(name) {
    this.setState(prevState => ({
      teams: [...prevState.teams, { teamName: name, teamPoints: 0 }]
    }));
  }
  removeTeam(teamToRemove) {
    console.log(teamToRemove.currentTarget.value);
    var newTeamList = [...this.state.teams]; // make a separate copy of the array
    var index = teamToRemove.currentTarget.value;
    if (index !== -1) {
      newTeamList.splice(index, 1);
      this.setState({ teams: newTeamList });
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
              <th>#</th>
              <th>Team Name</th>
              <th style={{ textAlign: "right" }}>Points</th>
            </tr>
          </thead>
          <tbody>
            {this.state.teams.map((teams, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{teams.teamName}</td>
                  <td style={{ textAlign: "right" }}>
                    <div className='d-flex justify-content-between'>
                      <Button
                        teamid={i}
                        pointsaction='inc'
                        size='sm'
                        variant='success'
                        onClick={this.teamPointsChange.bind(this)}
                      >
                        ∆
                      </Button>
                      {teams.teamPoints}
                      <Button
                        teamid={i}
                        pointsaction='dec'
                        size='sm'
                        variant='danger'
                        onClick={this.teamPointsChange.bind(this)}
                      >
                        ∇
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
                      onClick={this.removeTeam.bind(this)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <td colSpan='4' style={{ textAlign: "center" }}>
                <Button block size='sm' onClick={this.teamModalHandler}>
                  Add Team #{this.state.teams.length + 1}
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <TeamNameModal
          onSubmit={this.addTeam}
          onHide={this.teamModalHandler}
          show={this.state.teamModalOpen}
          teamNumber={this.state.teams.length + 1}
        />
      </Alert>
    );
  }
}

export default TeamTable;
