import React from 'react'
import UserInfoWrapper from './styles'
import { UserType } from '../../const/types'

export default function UserInfo ({ name, avatar }: UserType) {
	return (
		<UserInfoWrapper className="user-info">
			<img src={avatar} alt={name} />
			<span>{name}</span>
		</UserInfoWrapper>
	)
}
