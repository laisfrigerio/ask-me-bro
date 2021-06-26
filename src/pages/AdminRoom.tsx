import React from "react"
import { useParams } from "react-router-dom"
import { useRoom } from "../hooks/useRoom"
import { database } from "../services/firebase"

import TheButtonIcon from '../ui/TheButtonIcon'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import Question from '../components/Question'
import RoomTitle from '../components/RoomTitle'

type ParamsType = {
  id: string
}

export default function AdminRoom () {
  const params = useParams<ParamsType>()
  const roomId = params.id
  const { questions, roomName } = useRoom(roomId)

  async function handleRemoveQuestion (questionId: string | undefined) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <React.Fragment>
      <TheHeader />
      <TheMainContent>
        <RoomTitle
          questions={questions}
          roomName={roomName}
        />
        {questions.map((question) => {
          return (
            <Question
              key={question.id}
              author={question.author}  
              content={question.content}
            >
              <TheButtonIcon
                aria-label="Remover pergunta"
                className="btn-remove"
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </TheButtonIcon>
            </Question>
          )
        })}
      </TheMainContent>
    </React.Fragment>
  )
}
