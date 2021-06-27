import styled from 'styled-components'

const QuestionWrapper = styled.div`
	background: ${({ theme }) => theme.secondaryBackground};
	border: 1px solid transparent;
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	padding: 24px;

	& + .question {
		margin-top: 8px;
	}

	&.is-highlighted {
		background: #f4f0ff;
		border: 1px solid ${({ theme }) => theme.buttonDefaultColor};
		color: ${({ theme }) => theme.gray04};

		.btn-highlighted {
			svg path {
				stroke: ${({ theme }) => theme.buttonDefaultColor};
			}
		}

		footer .user-info span {
			color: ${({ theme }) => theme.gray04};
		}
	}

	&.is-answered {
		background: #dbdcdd;
	}

	p {
		color: ${({ theme }) => theme.gray04};
	}

	footer {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-top: 24px;
	}

	.user-info {
		span {
			color: #737380;
			font-weight: 400;
		}
	}
`

export default QuestionWrapper
