import React, { ReactNode } from 'react'
import QuestionWrapper from './styles'
import UserInfo from '../UserInfo'
import { QuestionType } from '../../const/types'

type ParamsType = QuestionType & {
  children: ReactNode,
}

export default function Question ({ author, children, content, isAnswered = false, isHighlighted = false }: ParamsType) {
	let className = 'question'

	if (isAnswered) {
		className += ` is-answered`
	}

	if (isHighlighted && !isAnswered) {
		className += ` is-highlighted`
	}

	return (
		<QuestionWrapper className={className}>
			<p>{content}</p>
			<footer>
				<UserInfo name={author.name} avatar={author.avatar} />
				<div>
					{ children }
				</div>
			</footer>
		</QuestionWrapper>
	)
}
