import React, { createContext, useState } from 'react'
import * as PropTypes from 'prop-types'

export const TeamInputModalContext = createContext({
  inputModalOpen: false
})

const TeamInputModalProvider = ({ children }) => {
  const [inputModalOpen, setInputModalOpen] = useState(false)

  const values = {
    inputModalOpen,
    setInputModalOpen
  }

  return (
    <TeamInputModalContext.Provider value={values}>
      {children}
    </TeamInputModalContext.Provider>
  )
}

TeamInputModalProvider.propTypes = {
  children: PropTypes.node
}

export default TeamInputModalProvider
