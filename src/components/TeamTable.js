import React, { useCallback, useContext } from 'react'
import { Table, Button } from 'react-bootstrap'
import { TeamsContext } from '../providers/TeamsProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faMinus, faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { SelectedTeamContext } from '../providers/SelectedTeamProvider'

const TeamTable = () => {
  const { teams, setTeams } = useContext(TeamsContext)
  const { selectedTeam, setSelectedTeam } = useContext(SelectedTeamContext)

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

  const handleNextTeam = () => {
    const sortedTeams = teams.sort((teamA, teamB) => Number(teamA.id) < Number(teamB.id))
    if (typeof selectedTeam === 'number') {
      const currentIndex = teams.findIndex((team) => team.id === selectedTeam)
      if (currentIndex === teams.length - 1) {
        setSelectedTeam(sortedTeams[0].id)
      } else {
        setSelectedTeam(sortedTeams[currentIndex + 1].id)
      }
      return null
    }
    setSelectedTeam(sortedTeams[0].id)
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
          teams
            .sort((teamA, teamB) => teamA.id < teamB.id)
            .map((team) => (
              <tr key={team.id}>
                <td>
                  <Button
                    block
                    size={'sm'}
                    data-team-id={team.id}
                    variant={
                      selectedTeam === team.id
                        ? 'success'
                        : 'outline-success'
                    }
                    onClick={() => setSelectedTeam(team.id)}
                  >
                    <FontAwesomeIcon icon={faPlay}/>
                  </Button>
                </td>
                <td>
                  {team.id}
                </td>
                <td style={{ fontWeight: selectedTeam === team.id ? 'bold' : null }}>
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
