import React, { FormEvent, useState } from "react"
import { useParams } from "react-router-dom"
import TheButton from '../ui/TheButton'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import ListQuestion from '../components/ListQuestion'
import RoomTitle from '../components/RoomTitle'
import UserInfo from '../components/UserInfo'
import { useAuth } from "../hooks/useAuth"
import { useRoom } from "../hooks/useRoom"
import { database } from "../services/firebase"

type ParamsType = {
  id: string
}

export default function Room () {
  const params = useParams<ParamsType>()
  const roomId = params.id
  const { user } = useAuth()
  const { questions, roomName } = useRoom(roomId)
  const [question, setQuestion] = useState('')

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
        <RoomTitle
          questions={questions}
          roomName={roomName}
        />
        <form onSubmit={handleAddQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={question}
            onChange={event => setQuestion(event.target.value)}
          />
          <div className="form-footer">
            {user && (
              <UserInfo name={user.name} avatar={user.avatar} />
            )}
            {!user && (
              <p>Para enviar uma pergunta, <a className="btn-as-link" href="#login">Faça seu login</a></p>
            )}
            <TheButton>Enviar pergunta</TheButton>
          </div>
        </form>
        <ListQuestion questions={questions} />
      </TheMainContent>
    </React.Fragment>
  )
}
