import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './services/firebase'

import { AuthContextProvider } from './context/AuthContext'
import AddRoom from './pages/AddRoom'
import Rooms from './pages/Rooms'
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
            <Route path="/rooms/:id" component={Rooms} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
