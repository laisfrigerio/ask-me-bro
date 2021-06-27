import styled from 'styled-components'

const RoomCodeWrapper = styled.button`
	background: transparent;
	border: 1px solid ${({ theme }) => theme.secondaryColor};
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	height: 40px;
	overflow: hidden;

	> div {
		align-items: center;
		background: ${({ theme }) => theme.secondaryColor};
		display: flex;
		height: 100%;
		justify-content: center;
		padding: 0 12px;

		&:hover {
			filter: brightness(0.9);
		}
	}

	> span {
		align-self: center;
		color: ${({ theme }) => theme.primaryColor};
		display: block;
		flex: 1;
		padding: 0 16px 0 12px;
		width: auto;
	}

	@media screen and (max-width: 654px) {
		> span {
			display: none;
		}
	}
`

export default RoomCodeWrapper
