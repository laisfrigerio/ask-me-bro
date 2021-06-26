import React from 'react'
import styled from 'styled-components'
import copyImg from '../assets/images/copy.svg'

const Wrapper = styled.button`
	background: #fff;
	border: 1px solid #835afd;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	height: 40px;
	overflow: hidden;

	div {
		align-items: center;
		background: #835afd;
		display: flex;
		height: 100%;
		justify-content: center;
		padding: 0 12px;

		&:hover {
			filter: brightness(0.9);
		}
	}

	span {
		align-self: center;
		display: block;
		flex: 1;
		padding: 0 16px 0 12px;
		width: 260px;
	}
`

type ParamsType = {
	code: string
}

export default function RoomCode ({ code }: ParamsType) {
	function copyToClipboard () {
		navigator.clipboard.writeText(code)
	}

	return (
		<Wrapper onClick={copyToClipboard}>
			<div>
				<img src={copyImg} alt="Copy room code to clipboard" />
			</div>
			<span>Sala #{code}</span>
		</Wrapper>
	)
}
