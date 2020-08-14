import React, { useCallback, useContext, useMemo } from 'react'
import { Table, Button } from 'react-bootstrap'
import { TeamsContext } from '../providers/TeamsProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMinus, faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { SelectedTeamContext } from '../providers/SelectedTeamProvider'
import last from 'lodash/last'

const TeamTable = () => {
  const { teams, setTeams } = useContext(TeamsContext)
  const { selectedTeamId, setSelectedTeamId } = useContext(SelectedTeamContext)

  const sortedTeams = useMemo(() => {
    return teams.sort((teamA, teamB) => teamA.id < teamB.id ? -1 : 1)
  }, [teams])

  const handleChangePoints = useCallback((e) => {
    const localTeams = [...teams]
    const teamId = e.currentTarget.getAttribute('data-team-id')
    const points = e.currentTarget.getAttribute('data-points')

    const teamIndex = localTeams.findIndex((team) => team.id === Number(teamId))

    if (teamIndex !== -1) {
      localTeams[teamIndex].points = localTeams[teamIndex].points + Number(points)
      setTeams(localTeams)
    }
  }, [teams, setTeams])

  const handleNextTeam = useCallback(() => {
    if (typeof selectedTeamId === 'number' && selectedTeamId !== last(teams).id) {
      setSelectedTeamId(selectedTeamId + 1)
      return
    }

    setSelectedTeamId(sortedTeams[0].id)
  }, [teams, selectedTeamId, setSelectedTeamId, sortedTeams])

  const handleSetTeam = useCallback((e) => {
    const teamId = e.currentTarget.getAttribute('data-team-id')
    setSelectedTeamId(Number(teamId))
  }, [setSelectedTeamId])

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
            <Button
              size={'sm'}
              block
              onClick={handleNextTeam}
            >
              NEXT
            </Button>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          sortedTeams.map((team) => (
            <tr key={team.id}>
              <td>
                <Button
                  block
                  size={'sm'}
                  data-team-id={team.id}
                  variant={
                    selectedTeamId === team.id
                      ? 'success'
                      : 'outline-success'
                  }
                  onClick={handleSetTeam}
                >
                  <FontAwesomeIcon icon={faPlay}/>
                </Button>
              </td>
              <td>
                {team.id}
              </td>
              <td style={{ fontWeight: selectedTeamId === team.id ? 'bold' : null }}>
                {team.name}
              </td>
              <td style={{ textAlign: 'right' }}>
                <div className='d-flex justify-content-between'>
                  <Button
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
                  size='sm'
                  variant='warning'
                >
                  <FontAwesomeIcon icon={faEdit}/>
                </Button>
                <Button
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
