import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './services/firebase'

import { AuthContextProvider } from './context/AuthContext'
import AddRoom from './pages/AddRoom'
import Home from './pages/Home'
import GlobalStyle from './global/style'

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/add" component={AddRoom} />
        </AuthContextProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
