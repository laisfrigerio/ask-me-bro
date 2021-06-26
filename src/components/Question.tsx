import React, { ReactNode } from 'react'
import styled from 'styled-components'
import UserInfo from './UserInfo'
import { QuestionType } from '../const/types'

const Wrapper = styled.div`
	background: #fefefe;
	border-radius: 8px;
	box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
	padding: 24px;

	& + .question {
		margin-top: 8px;
	}

	p {
		color: #29292e;
	}

	footer {
		align-items: center;
		display: flex;
		justify-content: space-between;
		margin-top: 24px;
	}

	.user-info {
		span {
			color: #737380;
			font-weight: 400;
		}
	}
`

type ParamsType = QuestionType & {
  children: ReactNode,
}

export default function Question ({ author, children, content }: ParamsType) {
	return (
		<Wrapper className="question">
			<p>{content}</p>
			<footer>
				<UserInfo name={author.name} avatar={author.avatar} />
				<div>
					{ children }
				</div>
			</footer>
		</Wrapper>
	)
}
