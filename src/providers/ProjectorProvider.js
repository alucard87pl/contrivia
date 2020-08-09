import React, { createContext, useState } from 'react'
import * as PropTypes from 'prop-types'
import NewWindow from 'react-new-window'
import ProjectorWindow from '../components/ProjectorWindow'

export const ProjectorContext = createContext({})

const ProjectorProvider = ({ children }) => {
  const [isProjectorOpen, setProjectorOpen] = useState(false)
  const [projectorMode, setProjectorMode] = useState(false)

  const values = {
    isProjectorOpen,
    setProjectorOpen,
    projectorMode,
    setProjectorMode
  }

  return (
    <ProjectorContext.Provider value={values}>
      {children}
      {
        isProjectorOpen &&
        <NewWindow
          title="Projector"
          features={{ innerHeight: "fit-content", innerWidth: "fit-content", location: "off" }}
          center="screen"
          onUnload={() => setProjectorOpen(false)}>
          <ProjectorWindow />
        </NewWindow>
      }
    </ProjectorContext.Provider>
  )
}

ProjectorProvider.propTypes = {
  children: PropTypes.node
}

export default ProjectorProvider
