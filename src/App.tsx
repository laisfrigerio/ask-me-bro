import React from 'react'
import {ThemeProvider} from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext'
import GlobalStyle from './global/style'
import { lightTheme, darkTheme } from './global/theme'
import  useTheme from './hooks/useTheme'

import PageAddRoom from './pages/AddRoom'
import PageAdminRoom from './pages/AdminRoom'
import PageRoom from './pages/Room'
import PageHome from './pages/Home'

import './services/firebase'

function App() {
  const [theme] = useTheme()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
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
    </ThemeProvider>
  )
}

export default App
