import React, { Component } from "react";
import ProjectorTeamTable from "./ProjectorTeamTable";
import ProjectorQuestion from "./ProjectorQuestion";

export class ProjectorWindow extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return <>
      {this.props.mode ? <ProjectorTeamTable teams={this.props.teams} /> : <ProjectorQuestion />}
    </>;
  }
}

export default ProjectorWindow;