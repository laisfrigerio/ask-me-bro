
import React from 'react'
import styled from 'styled-components'
import logoImg from '../assets/images/logo.svg'
import RoomCode from '../components/RoomCode'
import { useParams } from 'react-router-dom'

const Wrapper = styled.header`
	border-bottom: 1px solid #e2e2e2;
	padding: 24px;

	.content {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1120px;

		> img {
			max-height: 45px;
		}
	}
`

type ParamsType = {
	id: string
}

export default function Header () {
	const params = useParams<ParamsType>()

	return (
		<Wrapper>
			<div className="content">
				<img src={logoImg} alt="Let Me Ask" />
				<RoomCode code={params.id} />
			</div>
		</Wrapper>
	)
}
