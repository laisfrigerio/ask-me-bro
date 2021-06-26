import React, { FormEvent, useState } from "react"
import TheButton from '../ui/TheButton'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import { useAuth } from "../hooks/useAuth"
import { database } from "../services/firebase"
import { useParams } from "react-router-dom"

type ParamsType = {
	id: string
}

export default function Room () {
	const params = useParams<ParamsType>()
	const roomId = params.id

	const [question, setQuestion] = useState('')
	const { user } = useAuth()

	async function handleAddQuestion (event: FormEvent) {
		event.preventDefault()

		if (question.trim() === '') {
			return
		}

		if (!user) {
			alert('You must logged in before send questions')
		}

		const payload = {
			content: question,
			author: {
				name: user?.name,
				avatar: user?.avatar
			},
			isHighlighted: false,
			isAnswered: false
		}

		await database.ref(`rooms/${roomId}/questions`).push(payload)
		setQuestion('')
	}

	return (
		<React.Fragment>
			<TheHeader />
			<TheMainContent>
				<div className="room-title">
					<h1 className="title-01">Sala React Q&A</h1>
					<span>4 perguntas</span>
				</div>
				<form onSubmit={handleAddQuestion}>
					<textarea
						placeholder="O que você quer perguntar?"
						value={question}
						onChange={event => setQuestion(event.target.value)}
					/>
					<div className="form-footer">
						{user ? (
							<div className="user-info">
								<img src={user.avatar} alt={user.name} />
								<span>{user.name}</span>
							</div>
						) : (
							<p>Para enviar uma pergunta, <a className="btn-as-link" href="#login">Faça seu login</a></p>
						)}
						<TheButton>Enviar pergunta</TheButton>
					</div>
				</form>
			</TheMainContent>
		</React.Fragment>
	)
}
