import styled from 'styled-components'

const PageAuth = styled.div`
	display: flex;
	align-items: stretch;
	height: 100vh;

	main {
		align-items: center;
		display: flex;
		flex: 8;
		justify-content: center;
		padding: 0 32px;
	}

	.separator {
		align-items: center;
		color: #a8a8b3;
		display: flex;
		font-size: 14px;
		margin: 32px 0;

		&:after,
		&:before  {
			background: #a8a8b3;
			content: '';
			flex: 1;
			height: 1px
		}

		&:after {
			margin-left: 16px;
		}

		&:before {
			margin-right: 16px;
		}
	}

	.main-content {
		align-items: stretch;
		display: flex;
		flex-direction: column;
		max-width: 320px;
		text-align: center;
		width: 100%;

		> img {
			align-self: center;
		}

		form {
			input {
				background: #fff;
				border: 1px solid #a8a8b3;
				border-radius: 8px;
				height: 58px;
				padding: 0 16px;
			}

			button {
				margin-top: 16px;
			}

			input, button {
				width: 100%;
			}
		}

		h2 {
			font-family: 'Poppins', sans-serif;
			font-size: 24px;
			margin: 64px 0 24px;
		}

		p {
			color: #737380;
			font-size: 14px;
			margin-top: 16px;

			a {
				color: #e559f9;
			}
		}
	}
`

export default PageAuth
