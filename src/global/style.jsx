import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

	* {
		border: 0;
		box-sizing: border-box;
		font-family: 'Overpass', sans-serif;
		margin: 0;
		outline: 0;
		padding: 0;
	}

  body {
		background-color: ${({ theme }) => theme.background};
		color: ${({ theme }) => theme.defaultColorText};
		height: 100vh;
		transition: all 0.50s linear;
		width: 100%;
  }

	body, input, textarea, button {
		font: 400 16px 'Roboto', sans-serif;
	}
`

export default GlobalStyle
