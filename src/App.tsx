import React from 'react'
import {ThemeProvider} from "styled-components";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext'
import { lightTheme, darkTheme } from './global/theme'
import GlobalStyle from './global/style'
import  useTheme from './hooks/useTheme'

import PageAddRoom from './pages/AddRoom'
import PageHome from './pages/Home'
import PageAdminRoom from './pages/AdminRoom'
import PageRoom from './pages/Room'
import PageNotFound from './pages/NotFound'

import TheButtonFloating from './ui/TheButtonFloating'

import './services/firebase'

function App() {
  const { theme, themeToggler } = useTheme()
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <TheButtonFloating className="moon" onClick={themeToggler}>
        <i className={`fas fa-moon`}></i>
      </TheButtonFloating>
      <BrowserRouter>
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/rooms/add" component={PageAddRoom} />
            <Route path="/rooms/:id" component={PageRoom} />
            <Route path="/admin/rooms/:id" component={PageAdminRoom} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
