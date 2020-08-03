import React, { Component } from "react";
import { Alert, Table, Container } from "react-bootstrap";

export class ProjectorTeamTable extends Component {
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
      <Alert style={{ textAlign: "center" }}>
        <Alert.Heading style={{ textAlign: "center" }}><h1>RANKING</h1></Alert.Heading>
        <hr />
        <Table
          size="sm">
          <tbody>
            {
              this.props.teams.slice(0, 3).map((teams, i) => {
                return (
                  <tr key={"top3" + { i }}>
                    <td style={{ textAlign: "right" }}><h1>#{i + 1}.</h1></td>
                    <td>
                      <h1>{teams.teamName}</h1>
                    </td>
                    <td style={{ textAlign: "right" }}><h1>{teams.teamPoints}</h1></td>
                  </tr>
                );
              })
            }
            {
              this.props.teams.slice(3).map((teams, i) => {
                return (
                  <tr key={"rest" + { i }}>
                    <td style={{ textAlign: "right" }}><h4>#{i + 4}.</h4></td>
                    <td>
                      <h4>{teams.teamName}</h4>
                    </td>
                    <td style={{ textAlign: "right" }}><h4>{teams.teamPoints}</h4></td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>
      </Alert >
    );
  }
}

export default ProjectorTeamTable;
