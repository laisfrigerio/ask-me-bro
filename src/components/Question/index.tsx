import React, { ReactNode } from 'react'
import QuestionWrapper from './styles'
import UserInfo from '../UserInfo'
import { QuestionType } from '../../const/types'

type ParamsType = QuestionType & {
  children: ReactNode,
}

export default function Question ({ author, children, content }: ParamsType) {
	return (
		<QuestionWrapper className="question">
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
