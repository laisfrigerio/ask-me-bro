import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Overpass&display=swap');

	* {
		border: 0;
		box-sizing: border-box;
		font-family: 'Overpass', sans-serif;
		margin: 0;
		padding: 0;
	}

  body {
		background-color: #f8f8f8;
		height: 100vh;
		width: 100%;
  }
`

export default GlobalStyle
