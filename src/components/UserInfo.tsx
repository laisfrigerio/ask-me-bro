import React from 'react'
import styled from 'styled-components'
import { UserType } from '../const/types'

const Wrapper = styled.div`
	align-items: center;
	display: flex;
	
	img {
		border-radius: 50%;
		height: 32px;
		width: 32px;
	}

	span {
		color: #29292e;
		font-size: 14px;
		font-weight: 500;
		margin-left: 8px;
	}
`

export default function UserInfo ({ name, avatar }: UserType) {
	return (
		<Wrapper className="user-info">
			<img src={avatar} alt={name} />
			<span>{name}</span>
		</Wrapper>
	)
}
