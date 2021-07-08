import React from 'react'
import TeamsProvider from './TeamsProvider'
import * as PropTypes from 'prop-types'
import ProjectorProvider from './ProjectorProvider'
import TeamInputModalProvider from './TeamInputModalProvider'
import SelectedTeamProvider from './SelectedTeamProvider'

const AllProviders = ({ children }) => (
  <TeamsProvider>
    <ProjectorProvider>
      <TeamInputModalProvider>
        <SelectedTeamProvider>
          {children}
        </SelectedTeamProvider>
      </TeamInputModalProvider>
    </ProjectorProvider>
  </TeamsProvider>
)

AllProviders.propTypes = {
  children: PropTypes.node
}

export default AllProviders
