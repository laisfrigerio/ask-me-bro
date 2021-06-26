import React, { ReactNode } from 'react'
import { QuestionType } from '../const/types'

type ParamsType = {
	questions: QuestionType[],
	children: ReactNode
}

export default function ListQuestion ({ children, questions }: ParamsType) {
	return (
		<div className="question-list">
			{questions.map((question: QuestionType) => {
				return (
					<div>{children}</div>
				)
			})}
		</div>
	)
}
