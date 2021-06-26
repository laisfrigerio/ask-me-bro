import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './services/firebase'

import { AuthContextProvider } from './context/AuthContext'
import AddRoom from './pages/AddRoom'
import AdminRoom from './pages/AdminRoom'
import Room from './pages/Room'
import Home from './pages/Home'
import GlobalStyle from './global/style'

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/add" component={AddRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
