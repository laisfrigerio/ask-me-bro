
import React from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'
import logoImg from '../assets/images/logo.svg'
import RoomCode from '../components/RoomCode'
import TheButton from '../ui/TheButton'

const Wrapper = styled.header`
	border-bottom: 1px solid #e2e2e2;
	padding: 24px;

	.content {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin: 0 auto;
		max-width: 1120px;

		> div {
			display: flex;
			gap: 16px;

			button {
				height: 40px;
			}
		}

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
	const { user } = useAuth()
	const { roomAuthorId } = useRoom(params.id)

	return (
		<Wrapper>
			<div className="content">
				<img src={logoImg} alt="Let Me Ask" />
				<div>
					<RoomCode code={params.id} />
					{user?.id === roomAuthorId && (
						<TheButton isOutlined>Encerrar</TheButton>
					)}
				</div>
			</div>
		</Wrapper>
	)
}
