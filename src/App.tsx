import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './services/firebase'

import AddRoom from './pages/AddRoom'
import Home from './pages/Home'
import GlobalStyle from './global/style'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/add" component={AddRoom} />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
