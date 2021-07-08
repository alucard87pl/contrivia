import React, { createContext, useState } from 'react'
import * as PropTypes from 'prop-types'
import defaultTeams from '../teams'

export const TeamsContext = createContext({
  teams: []
})

const TeamsProvider = ({ children }) => {
  const [teams, setTeams] = useState(defaultTeams)

  const value = {
    teams,
    setTeams
  }

  return (
    <TeamsContext.Provider value={value}>
      {children}
    </TeamsContext.Provider>
  )
}

TeamsProvider.propTypes = {
  children: PropTypes.node
}

export default TeamsProvider
