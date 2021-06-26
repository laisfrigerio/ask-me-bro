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
			{ questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
		</RoomTitleWrapper>
	)
}
