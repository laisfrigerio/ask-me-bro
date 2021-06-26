import React from 'react'
import Question from './Question'
import { QuestionType } from '../const/types'

type ParamsType = {
	questions: QuestionType[]
}

export default function ListQuestion ({ questions }: ParamsType) {
	return (
		<div className="question-list">
			{questions.map((question: QuestionType) => {
				return (
					<Question
						key={question.id}
						author={question.author}  
						content={question.content}
					/>
				)
			})}
		</div>
	)
}
