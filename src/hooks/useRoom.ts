import { useEffect, useState } from 'react'
import { database } from "../services/firebase"
import { FirebaseQuestionType, QuestionType } from '../const/types'
import { useAuth } from './useAuth'

export function useRoom (roomId: string) {
  const { user } = useAuth()
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [roomName, setRoomName] = useState('')
  const [roomAuthorId, setRoomAuthorId] = useState('')
  const [roomCloseAt, setRoomCloseAt] = useState(null)
  const [roomIsLoading, setRoomIsLoading] = useState(true)

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionType = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })

      setRoomCloseAt(databaseRoom.closeAt || null)
      setRoomAuthorId(databaseRoom.authorId)
      setRoomName(databaseRoom.name)
      setQuestions(parsedQuestions)
      setRoomIsLoading(false)
    })
  }, [roomId, user?.id])

  return {
    questions,
    roomAuthorId,
    roomCloseAt,
    roomIsLoading,
    roomName
  }
}