import React from 'react'
import './services/firebase'

import Wrapper from './components/Wrapper'
import GlobalStyle from './global/style'
import askLogo from './images/ask.png'

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <div className="logo">
          <img src={askLogo} alt="Ask me Bro" title="Ask me Bro" />-me-bro
        </div>
        <p className="comming-soon">comming soon ...</p>
      </Wrapper>
    </React.Fragment>
  )
}

export default App
