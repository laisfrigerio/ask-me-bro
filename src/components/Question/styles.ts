import styled from 'styled-components'

const QuestionWrapper = styled.div`
	background: #fefefe;
	border: 1px solid transparent;
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	padding: 24px;

	& + .question {
		margin-top: 8px;
	}

	&.is-highlighted {
		background: #f4f0ff;
		border: 1px solid #835afd;

		.btn-highlighted {
			svg path {
				stroke: #835afd;
			}
		}

		footer .user-info span {
			color: #29292e;
		}
	}

	&.is-answered {
		background: #dbdcdd;
	}

	p {
		color: #29292e;
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