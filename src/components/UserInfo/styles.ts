import styled from 'styled-components'

const UserInfoWrapper = styled.div`
	align-items: center;
	display: flex;
	
	img {
		border-radius: 50%;
		height: 32px;
		width: 32px;
	}

	span {
		color: ${({ theme }) => theme.gray03};
		font-size: 14px;
		font-weight: 500;
		margin-left: 8px;
	}
`

export default UserInfoWrapper
