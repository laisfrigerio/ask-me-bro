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
		color: ${({ theme }) => theme.separator};
		display: flex;
		font-size: 14px;
		margin: 32px 0;

		&:after,
		&:before  {
			background: ${({ theme }) => theme.separator};
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
				background: ${({ theme }) => theme.backgroundColor};
				border: 1px solid ${({ theme }) => theme.borderColor};
				border-radius: 8px;
				color: ${({ theme }) => theme.ternaryColor};
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
			margin: 32px 0 24px;
		}

		p {
			color: ${({ theme }) => theme.primaryColor};
			font-size: 14px;
			margin-top: 16px;

			a {
				color: ${({ theme }) => theme.quartenaryColor};
			}
		}
	}

	@media screen and (max-width: 888px) {
		flex-direction: column;

		main {
			padding: 60px 0;
		}
	}
`

export default PageAuth
