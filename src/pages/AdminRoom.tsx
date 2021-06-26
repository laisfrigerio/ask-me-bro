import React from "react"
import { useParams } from "react-router-dom"
import { useRoom } from "../hooks/useRoom"
import { database } from "../services/firebase"

import TheButtonIcon from '../ui/TheButtonIcon'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import Question from '../components/Question'
import RoomTitle from '../components/RoomTitle'

import imgDelete from '../assets/images/delete.svg'

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
                onClick={() => handleRemoveQuestion(question.id)}
              >
                <img src={imgDelete} alt="Remover pergunta" />
              </TheButtonIcon>
            </Question>
          )
        })}
      </TheMainContent>
    </React.Fragment>
  )
}
