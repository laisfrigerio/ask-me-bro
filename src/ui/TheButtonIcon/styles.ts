import styled from 'styled-components'

const TheButtonIconWrapper = styled.button`
	background: transparent;
	border: 0;
	cursor: pointer;
	transition: filter 0.2s;

	&:hover {
		filter: brightness(0.7);
	}

	&.btn-remove {
		svg path {
			stroke: ${({ theme }) => theme.redColor};
		}
	}

	&.btn-check,
	&.btn-like {
		svg path {
			stroke: ${({ theme }) => theme.primaryColor};
		}
	}

	&.btn-like {
		align-items: flex-end;
		display: flex;
		gap: 8px;

		&.liked {
			color: ${({ theme }) => theme.likeColor};

			.counter {
				color: ${({ theme }) => theme.likeColor};
			}

			svg path {
				stroke: ${({ theme }) => theme.likeColor};
			}
		}
	}
`

export default TheButtonIconWrapper
