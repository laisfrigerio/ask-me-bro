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
		background: ${({ theme }) => theme.highlighted.background};
		border: 1px solid ${({ theme }) => theme.highlighted.border};
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
		background: ${({ theme }) => theme.answered.background};
		color: ${({ theme }) => theme.answered.color};
	}

	p {
		color: ${({ theme }) => theme.title01};
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
