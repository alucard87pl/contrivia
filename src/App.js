import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./comps/Header";
import { Container, Row, Col } from "react-bootstrap";
import TeamTable from "./comps/TeamTable";
import QuestionsPanel from "./comps/QuestionsPanel";
import NewWindow from "react-new-window";
import ProjectorWindow from "./comps/ProjectorWindow";




export class App extends Component {

  constructor() {
    super();

    this.addTeam = this.addTeam.bind(this);
    this.removeTeam = this.removeTeam.bind(this);
    this.teamPointsChange = this.teamPointsChange.bind(this);
    this.setCurrentTeam = this.setCurrentTeam.bind(this);
    this.projectorModeToggle = this.projectorModeToggle.bind(this);
    this.spawnProjector = this.spawnProjector.bind(this);
    this.teamModalHandler = this.teamModalHandler.bind(this);

    this.state = {
      projectorOpen: false,
      projectorMode: true,
      teamModalOpen: false,
      teams: [
        { teamName: "SOG", teamPoints: "666" },
        { teamName: "Śpiące Leniwce", teamPoints: "325" },
        { teamName: "Random Fandom", teamPoints: "0" },
        { teamName: "Rakieta Odbytu", teamPoints: "100" },
        { teamName: "Ten jeden z tyłu", teamPoints: "100" },

      ],
      currentTeam: -1
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

  spawnProjector() {
    this.setState({ projectorOpen: !this.state.projectorOpen })
  }

  projectorModeToggle() {
    this.setState({ projectorMode: !this.state.projectorMode })
  }

  teamRotate = () => {
    if (this.state.currentTeam !== this.state.teams.length - 1) {
      this.setState({ currentTeam: this.state.currentTeam + 1 });
    } else {
      this.setState({ currentTeam: 0 });
    }
  };

  teamModalHandler() {
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
  setCurrentTeam(teamToSet) {
    console.log(teamToSet.currentTarget.getAttribute("ct"));
    this.setState({ currentTeam: parseInt(teamToSet.currentTarget.getAttribute("ct")) })
  }
  render() {
    return (
      <div className='App'>
        <Header
          projectorOpen={this.state.projectorOpen}
          spawnProjector={this.spawnProjector}
          mode={this.state.projectorMode}
          projectorModeToggle={this.projectorModeToggle} />
        <br />
        <Container fluid>
          <Row>
            <Col xl={3}>
              <TeamTable
                teams={this.state.teams}
                currentTeam={this.state.currentTeam}
                setCurrentTeam={this.setCurrentTeam}
                teamPointsChange={this.teamPointsChange}
                addTeam={this.addTeam}
                removeTeam={this.removeTeam}
                teamModalHandler={this.teamModalHandler}
                teamModalOpen={this.state.teamModalOpen}
                teamRotate={this.teamRotate}
              />
            </Col>
            <Col>
              <QuestionsPanel />
            </Col>
          </Row>
          {this.state.projectorOpen ?
            <NewWindow onUnload={this.spawnProjector}>
              <ProjectorWindow
                mode={this.state.projectorMode}
                teams={this.state.teams} />
            </NewWindow>
            : null}
        </Container>
      </div>
    );
  }
}

export default App;
