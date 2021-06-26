import styled from 'styled-components'

const TheAsideWrapper = styled.aside`
	background-color: #835afd;
	color: #fff;
	display: flex;
	flex: 7;
	flex-direction: column;
	justify-content: center;
	padding: 120px 80px;

	img {
		max-width: 300px;
	}

	strong {
		font: 700 36px 'Poppins', sans-serif;
		line-height: 42px;
		margin-top: 16px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
		margin-top: 16px;
		color: #f8f8f8;
	}

	@media screen and (max-width: 888px) {
		height: 550px;

		img {
			height: 200px;
		}
	}
`

export default TheAsideWrapper
