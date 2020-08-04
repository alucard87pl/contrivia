import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Providers from './providers'
import Home from './pages/Home'
import Modals from './modals'

const App = () => (
  <Providers>
    <Home/>
    <Modals/>
  </Providers>
)

export default App
