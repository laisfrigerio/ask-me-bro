import React from 'react'
import styled from 'styled-components'
import { QuestionType } from '../const/types'

const Wrapper  = styled.div`
	align-items: center;
	display: flex;
	margin: 32px 0 24px;

	.title-01 {
		color: #29292e;
		font-family: 'Poppins', sans-serif;
		font-size: 24px;
	}


	> span {
		background: #e559f9;
		border-radius: 9999px;
		color: #fff;
		font-size: 14px;
		font-weight: 500;
		margin-left: 16px;
		padding: 8px 16px;
	}
`

type ParamsType = {
	questions: QuestionType[],
	roomName: string
}

export default function RoomTitle ({ questions, roomName }: ParamsType) {
	return (
		<Wrapper className="room-title">
			<h1 className="title-01">Sala {roomName}</h1>
			{ questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
		</Wrapper>
	)
}
