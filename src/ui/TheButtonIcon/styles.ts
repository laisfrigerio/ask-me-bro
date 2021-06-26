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
			stroke: #E73F5D;
		}
	}

	&.btn-like {
		align-items: flex-end;
		display: flex;
		gap: 8px;

		&.liked {
			color: #835afd;

			svg path {
				stroke: #835afd;
			}
		}
	}
`

export default TheButtonIconWrapper
