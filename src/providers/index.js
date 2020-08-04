import React from 'react'
import TeamsProvider from './TeamsProvider'
import * as PropTypes from 'prop-types'
import ProjectorProvider from './ProjectorProvider'
import TeamInputModalProvider from './TeamInputModal'

const AllProviders = ({ children }) => (
  <TeamsProvider>
    <ProjectorProvider>
      <TeamInputModalProvider>
        {children}
      </TeamInputModalProvider>
    </ProjectorProvider>
  </TeamsProvider>
)

AllProviders.propTypes = {
  children: PropTypes.node
}

export default AllProviders
