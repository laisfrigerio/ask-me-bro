import React from 'react'
import RoomTitleWrapper from './styles'
import { QuestionType } from '../../const/types'

type ParamsType = {
	questions: QuestionType[],
	roomName: string
}

export default function RoomTitle ({ questions, roomName }: ParamsType) {
	return (
		<RoomTitleWrapper className="room-title">
			<h1 className="title-01">Sala {roomName}</h1>
			{ questions.length > 0 && <div aria-label="Quantidade de perguntas" title="Quantidade de perguntas">{questions.length} <span>pergunta(s)</span></div> }
		</RoomTitleWrapper>
	)
}
