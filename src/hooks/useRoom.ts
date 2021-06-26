import { useEffect, useState } from 'react'
import { database } from "../services/firebase"

type QuestionsType = {
  id: string,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighlighted: boolean,
  isAnswered: boolean,
}

type FirebaseQuestionsProps = Record<
  string,
  {
    author: {
      name: string,
      avatar: string,
    };
    content: string,
    isAnswered: boolean,
    isHighlighted: boolean,
    likes: Record<
      string,
      {
        authorId: string,
      }
    >,
  }
>

export function useRoom (roomId: string) {
  const [questions, setQuestions] = useState<QuestionsType[]>([])
  const [roomName, setRoomName] = useState('')

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`)

    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestionsProps = databaseRoom.questions ?? {};

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