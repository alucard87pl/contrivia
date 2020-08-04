import React, { useContext } from 'react'
import { Table, Button } from 'react-bootstrap'
import { TeamsContext } from '../providers/TeamsProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMinus, faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const TeamTable = () => {
  const { teams, setTeams } = useContext(TeamsContext)

  const handleChangePoints = (e) => {
    const localTeams = [...teams]
    const teamId = e.currentTarget.getAttribute('data-team-id')
    const points = e.currentTarget.getAttribute('data-points')

    localTeams[teamId].points = localTeams[teamId].points + Number(points)
    setTeams(localTeams)
  }

  return (
    <Table
      striped
      bordered
      hover
      size='sm'
    >
      <thead>
        <tr>
          <th>NOW</th>
          <th>#</th>
          <th>Team Name</th>
          <th style={{ textAlign: 'center' }}>
              Points
          </th>
          <th style={{ textAlign: 'center' }}>
            <Button size={'sm'} onClick={() => {}} block>
                NEXT
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          teams
            .sort((a, b) => b.points - a.points)
            .map((team, index) => (
              <tr key={team.id}>
                <td>
                  <Button
                    block
                    size={'sm'}
                    ct={index}
                    data-team-id={team.id}
                  >
                    <FontAwesomeIcon icon={faPlay}/>
                  </Button>
                </td>
                <td>
                  {index + 1}
                </td>
                <td>
                  {team.name}
                </td>
                <td style={{ textAlign: 'right' }}>
                  <div className='d-flex justify-content-between'>
                    <Button
                      teamid={index}
                      size='sm'
                      variant='success'
                      data-team-id={team.id}
                      data-points={1}
                      onClick={handleChangePoints}
                    >
                      <FontAwesomeIcon icon={faPlus}/>
                    </Button>
                    {team.points}
                    <Button
                      teamid={index}
                      size='sm'
                      variant='danger'
                      data-team-id={team.id}
                      data-points={-1}
                      onClick={handleChangePoints}
                    >
                      <FontAwesomeIcon icon={faMinus}/>
                    </Button>
                  </div>
                </td>
                <td style={{ textAlign: 'right' }}>
                  <Button
                    value={index}
                    size='sm'
                    variant='warning'
                  >
                    <FontAwesomeIcon icon={faEdit}/>
                  </Button>
                  <Button
                    value={index}
                    size='sm'
                    variant='danger'
                  >
                    <FontAwesomeIcon icon={faTrashAlt}/>
                  </Button>
                </td>
              </tr>
            ))
        }
        <tr>
          <td colSpan='4' style={{ textAlign: 'center' }}>
            <Button block size='sm'>
                Add Team #{teams.length + 1}
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TeamTable
