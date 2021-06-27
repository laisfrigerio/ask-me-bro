import React, { FormEvent, useState } from 'react'
import { useParams } from 'react-router-dom'
import { database } from '../services/firebase'

import TheButton from '../ui/TheButton'
import TheButtonIcon from '../ui/TheButtonIcon'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'

import EmptyQuestionList from '../components/EmptyQuestionList'
import LoadingContent from '../components/LoadingContent'
import Question from '../components/Question'
import RoomClosed from '../components/RoomClosed'
import RoomTitle from '../components/RoomTitle'
import UserInfo from '../components/UserInfo'

import { useAuth } from '../hooks/useAuth'
import { useRoom } from '../hooks/useRoom'

type ParamsType = {
  id: string
}

export default function Room () {
  const params = useParams<ParamsType>()
  const roomId = params.id
  const { user } = useAuth()
  const { questions, roomCloseAt, roomIsLoading, roomName } = useRoom(roomId)
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

  async function handleLikeQuestion (questionId: string | undefined, likeId: string | undefined) {
    if (!user) {
      alert('You must logged in before send questions')
      return
    }

    if (likeId) {
      await database.ref(`rooms/${roomId}/questions/${questionId}/likes/${likeId}`).remove()
      return
    }

    await database.ref(`rooms/${roomId}/questions/${questionId}/likes`).push({
      authorId: user?.id
    })
  }

  if (roomIsLoading) {
    return <LoadingContent />
  }

  if (roomCloseAt) {
    return <RoomClosed />
  }

  return (
    <React.Fragment>
      <TheHeader></TheHeader>
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
            <TheButton disabled={!user || question === ''}>Enviar pergunta</TheButton>
          </div>
        </form>
        <EmptyQuestionList questions={questions} />
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
                {!question.isAnswered && (
                  <TheButtonIcon
                    aria-label="Curtir pergunta"
                    className={`btn-like ${question.likeId ? 'liked' : ''}`}
                    onClick={() => handleLikeQuestion(question.id, question.likeId)}
                  >
                    {question.likeCount && question.likeCount > 0 && <span className="counter">{question.likeCount}</span>}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </TheButtonIcon>
                )}
              </Question>
            )
          })}
        </div>
      </TheMainContent>
    </React.Fragment>
  )
}
