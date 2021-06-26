import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { database } from '../services/firebase'

import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

import TheButton from '../ui/TheButton'
import TheButtonIcon from '../ui/TheButtonIcon'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'

import LoadingContent from '../components/LoadingContent'
import Question from '../components/Question'
import RoomClosed from '../components/RoomClosed'
import RoomTitle from '../components/RoomTitle'

type ParamsType = {
  id: string
}

export default function AdminRoom () {
  const history = useHistory()
  const params = useParams<ParamsType>()
  const roomId = params.id

  const { user } = useAuth()
  const { questions, roomAuthorId, roomCloseAt, roomIsLoading, roomName } = useRoom(roomId)

  async function handleRemoveQuestion (questionId: string | undefined) {
    if (window.confirm('Tem certeza que você deseja excluir esta pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered (questionId: string | undefined) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighlightQuestion (questionId: string | undefined) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true
    })
  }

  async function handleShutDownRoom () {
    await database.ref(`rooms/${roomId}`).update({
      closeAt: new Date()
    })

    history.push('/')
  }

  if (!user || roomIsLoading) {
    return <LoadingContent />
  }

  if (roomCloseAt) {
    return <RoomClosed />
  }

  return (
    <React.Fragment>
      <TheHeader>
        {user?.id === roomAuthorId && (
          <TheButton
            className="btn-shut-down"
            isOutlined
            title="Encerrar sala"
            onClick={handleShutDownRoom}
          >
            <i className="header-shut-down-ico far fa-times-circle"></i>
            <span className="header-shut-down-text">Encerrar</span>
          </TheButton>
        )}
      </TheHeader>
      <TheMainContent>
        <RoomTitle
          questions={questions}
          roomName={roomName}
        />
        <div className="question-list">
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                author={question.author}  
                content={question.content}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {user?.id === roomAuthorId ? (
                  <div className="room-options">
                    {!question.isAnswered && (
                      <>
                        <TheButtonIcon
                        aria-label="Marcar pergunta como respondida"
                        className="btn-check"
                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12.0003" cy="11.9998" r="9.00375" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60193" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                      </TheButtonIcon>

                      <TheButtonIcon
                        aria-label="Dar destaque a pergunta"
                        className="btn-highlighted"
                        onClick={() => handleHighlightQuestion(question.id)}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.9999H18C19.657 17.9999 21 16.6569 21 14.9999V6.99988C21 5.34288 19.657 3.99988 18 3.99988H6C4.343 3.99988 3 5.34288 3 6.99988V14.9999C3 16.6569 4.343 17.9999 6 17.9999H7.5V20.9999L12 17.9999Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </TheButtonIcon>
                      </>
                    )}

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
                  </div>
                ) : (
                  null
                )}
              </Question>
            )
          })}
        </div>
      </TheMainContent>
    </React.Fragment>
  )
}
