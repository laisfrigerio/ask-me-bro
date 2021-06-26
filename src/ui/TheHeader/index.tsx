
import React from 'react'
import { useParams } from 'react-router-dom'
import TheHeaderWrapper from './styles'
import RoomCode from '../../components/RoomCode'
import logoImg from '../../assets/images/logo-ask-me-bro.svg'

type ParamsType = {
	id: string
}

export default function Header (props: { children?: React.ReactNode }) {
	const params = useParams<ParamsType>()

	return (
		<TheHeaderWrapper>
			<div className="content">
				<img src={logoImg} alt="Let Me Ask" />
				<div>
					<RoomCode code={params.id} />
					{props.children && (props.children)}
				</div>
			</div>
		</TheHeaderWrapper>
	)
}
