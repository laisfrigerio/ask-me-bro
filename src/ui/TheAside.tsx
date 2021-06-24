import React from 'react'
import styled from 'styled-components'
import illustrationImg from '../assets/images/illustration.svg'

const Wrapper = styled.aside`
	background-color: #835afd;
	color: #fff;
	display: flex;
	flex: 7;
	flex-direction: column;
	justify-content: center;
	padding: 120px 80px;

	img {
		max-width: 300px;
	}

	strong {
		font: 700 36px 'Poppins', sans-serif;
		line-height: 42px;
		margin-top: 16px;
	}

	p {
		font-size: 24px;
		line-height: 32px;
		margin-top: 16px;
		color: #f8f8f8;
	}
`

export default function TheAside () {
	return (
		<Wrapper>
			<img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
			<strong>Crie salas de Q&amp;A ao-vivo</strong>
			<p>Tire as dúvidas da sua audiência em tempo-real</p>
		</Wrapper>
	)
}
