import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './services/firebase'

import { AuthContextProvider } from './context/AuthContext'
import GlobalStyle from './global/style'

import PageAddRoom from './pages/AddRoom'
import PageAdminRoom from './pages/AdminRoom'
import PageRoom from './pages/Room'
import PageHome from './pages/Home'

function App() {

  return (
    <React.Fragment>
      <GlobalStyle />
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/rooms/add" component={PageAddRoom} />
            <Route path="/rooms/:id" component={PageRoom} />
            <Route path="/admin/rooms/:id" component={PageAdminRoom} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
