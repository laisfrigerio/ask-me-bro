import React from 'react'
import EmptyQuestionListWrapper from './styles'
import { QuestionType } from '../../const/types'
import imgEmptyQuestions from '../../assets/images/empty-questions.svg'

type ParamsType = {
	questions: QuestionType[]
}

export default function EmptyQuestionList ({ questions }: ParamsType) {
	if (questions.length) {
		return null
	}

	return (
		<EmptyQuestionListWrapper className="empty-question-list">
			<img src={imgEmptyQuestions} alt="Sala fechada" />
			<h2>Nenhuma pergunta por aqui...</h2>
			<small>Envie o código desta sala para seus amigos e comece a responder perguntas!</small>
		</EmptyQuestionListWrapper>
	)
}
