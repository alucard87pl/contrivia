import React, { createContext, useState } from 'react'
import * as PropTypes from 'prop-types'

export const SelectedTeamContext = createContext({
  selected: undefined
})

const SelectedTeamProvider = ({ children }) => {
  const [selectedTeam, setSelectedTeam] = useState(undefined)

  const value = {
    selectedTeam,
    setSelectedTeam
  }

  return (
    <SelectedTeamContext.Provider value={value}>
      {children}
    </SelectedTeamContext.Provider>
  )
}

SelectedTeamProvider.propTypes = {
  children: PropTypes.node
}

export default SelectedTeamProvider
