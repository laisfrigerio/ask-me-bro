import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	* {
		border: 0;
		box-sizing: border-box;
		font-family: 'Overpass', sans-serif;
		margin: 0;
		padding: 0;
	}

  body {
		background-color: #f8f8f8;
		color: #29292e;
		height: 100vh;
		width: 100%;
  }

	body, input, textarea, button {
		font: 400 16px 'Roboto', sans-serif;
	}
`

export default GlobalStyle
