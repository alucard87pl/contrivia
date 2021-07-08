import React, { createContext, useState } from 'react'
import * as PropTypes from 'prop-types'

export const SelectedTeamContext = createContext({
  selectedTeamId: undefined
})

const SelectedTeamProvider = ({ children }) => {
  const [selectedTeamId, setSelectedTeamId] = useState(undefined)

  const value = {
    selectedTeamId,
    setSelectedTeamId
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
