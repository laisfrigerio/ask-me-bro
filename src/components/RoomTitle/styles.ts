import styled from 'styled-components'

const RoomTitleWrapper  = styled.div`
	align-items: center;
	display: flex;
	margin: 32px 0 24px;

	.title-01 {
		color: ${({ theme }) => theme.title01};
		font-family: 'Poppins', sans-serif;
		font-size: 24px;
	}


	> div {
		background: ${({ theme }) => theme.rose};
		border-radius: 9999px;
		color: ${({ theme }) => theme.white};
		font-size: 14px;
		font-weight: 600;
		margin-left: 16px;
		padding: 8px 16px;
	}

	@media screen and (max-width: 654px) {
		span {
			display: none;
		}
	}
`

export default RoomTitleWrapper
