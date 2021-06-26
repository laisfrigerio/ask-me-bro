import { useEffect, useState } from 'react'
import { database } from "../services/firebase"
import { FirebaseQuestionType, QuestionType } from '../const/types'

export function useRoom (roomId: string) {
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [roomName, setRoomName] = useState('')

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
        }
      })

      setRoomName(databaseRoom.name);
      setQuestions(parsedQuestions);
    })
  }, [roomId])

  return {
    questions,
    roomName
  }
}