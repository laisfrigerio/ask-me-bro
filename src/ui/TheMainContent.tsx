
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
	margin: 0 auto;
	max-width: 800px;
	padding: 0 15px;

	form {
		textarea {
			background: #fefefe;
			border: 0;
			border-radius: 8px;
			box-shadow: 0 2px 12px rgba(0,0,0, 0.04);
			min-height: 130px;
			padding: 16px;
			resize: vertical;
			width: 100%;
		}

		.form-footer {
			align-items: center;
			display: flex;
			justify-content: space-between;
			margin-top: 14px;

			p {
				color: #737380;
				font-size: 14px;
				font-weight: 500;
			}
		}
	}

	.question-list {
		margin-top: 32px;
	}

	.btn-as-link {
		background: transparent;
		border: 0;
		color: #835afd;
		font-size: 14px;
		text-decoration: 14px;
	}
`

export default function Header (props: { children: React.ReactNode }) {
	return (
		<Wrapper>
			{props.children}
		</Wrapper>
	)
}
