
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.main`
	margin: 0 auto;
	max-width: 800px;
	padding: 0 15px;

	.title-01 {
		color: #29292e;
		font-family: 'Poppins', sans-serif;
		font-size: 24px;
	}

	.room-title {
		align-items: center;
		display: flex;
		margin: 32px 0 24px;

		> span {
			background: #e559f9;
			border-radius: 9999px;
			color: #fff;
			font-size: 14px;
			font-weight: 500;
			margin-left: 16px;
			padding: 8px 16px;
		}
	}

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

			.user-info {
				align-items: center;
				display: flex;
				
				img {
					border-radius: 50%;
					height: 32px;
					width: 32px;
				}

				span {
					color: #29292e;
					font-size: 14px;
					font-weight: 500;
					margin-left: 8px;
				}
			}
		}
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
