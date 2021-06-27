import styled from 'styled-components'

const TheMainContentWrapper = styled.main`
	margin: 0 auto;
	max-width: 800px;
	padding: 0 15px;

	&.room-is-closed,
	&.is-loading {
		align-items: center;
		display: flex;
    justify-content: center;
    margin-top: 100px;
	}

	&.room-is-closed {
    flex-direction: column;
		h2 {
			color: #989898;
			font-family: 'Poppins', sans-serif;
			margin-bottom: 20px;
		}
	}

	form {
		textarea {
			background: ${({ theme }) => theme.secondaryBackground};
			border: 0;
			border-radius: 8px;
			box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
			color: ${({ theme }) => theme.primaryColor};
			min-height: 130px;
			padding: 16px;
			resize: vertical;
			width: 100%;
		}

		.form-footer {
			align-items: center;
			display: flex;
			justify-content: space-between;
			margin-top: 14px;

			p {
				color: ${({ theme }) => theme.gray03};
				font-size: 14px;
				font-weight: 500;
			}
		}
	}

	.question-list {
		margin-top: 32px;
	}

	.room-options {
		display: flex;
		gap: 8px;
	}

	.btn-as-link {
		background: transparent;
		border: 0;
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 14px;
		text-decoration: 14px;
	}
`
export default TheMainContentWrapper
