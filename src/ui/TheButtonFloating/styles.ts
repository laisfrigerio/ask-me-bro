import styled from 'styled-components'

const TheButtonFloatingWrapper = styled.button`
	border-radius: 50%;
	bottom: 10px;
	cursor: pointer;
	height: 50px;
	position: fixed;
	right: 10px;
	transition: filter 0.2s;
	width: 50px;

	&.moon {
		background: ${({theme}) => theme.toggleTheme.background};
		color: ${({theme}) => theme.toggleTheme.color};
	}


	&:hover {
		filter: brightness(0.9);
	}
`

export default TheButtonFloatingWrapper
