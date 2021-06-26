import styled from 'styled-components'

const RoomCodeWrapper = styled.button`
	background: #fff;
	border: 1px solid #835afd;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	height: 40px;
	overflow: hidden;

	> div {
		align-items: center;
		background: #835afd;
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
		display: block;
		flex: 1;
		padding: 0 16px 0 12px;
		width: 260px;
	}

	@media screen and (max-width: 654px) {
		> span {
			display: none;
		}
	}
`

export default RoomCodeWrapper
