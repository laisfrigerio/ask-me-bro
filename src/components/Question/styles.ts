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

	p {
		color: ${({ theme }) => theme.ternaryColor};
	}

	.counter {
		color: ${({ theme }) => theme.primaryColor};
	}

	&.is-highlighted {
		background: ${({ theme }) => theme.highlightedBackground};
		border: 1px solid ${({ theme }) => theme.highlightedBorder};

		.btn-check,
		.btn-like,
		.btn-highlighted {
			.counter,
			p {
				color: ${({ theme }) => theme.highlightedColor} !important;
			}
			
			svg circle,
			svg path {
				stroke: ${({ theme }) => theme.highlightedBorder};
			}
		}

		footer .user-info span {
			color: ${({ theme }) => theme.highlightedBorder};
		}
	}

	&.is-answered {
		background: ${({ theme }) => theme.gray02};
		color: ${({ theme }) => theme.answeredColor};
	}

	footer {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-top: 24px;
	}

	.user-info {
		span {
			color: ${({ theme }) => theme.primaryColor};
			font-weight: 400;
		}
	}
`

export default QuestionWrapper
