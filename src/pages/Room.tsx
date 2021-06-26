import React, { FormEvent, useState, useEffect } from "react"
import TheButton from '../ui/TheButton'
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import { useAuth } from "../hooks/useAuth"
import { database } from "../services/firebase"
import { useParams } from "react-router-dom"

type QuestionsType = {
  id: string;
  author: {
    name: string;
    avatar: string;
  },
  content: string;
  isHighlighted: boolean;
  isAnswered: boolean;
}

type FirebaseQuestionsProps = Record<
  string,
  {
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    isAnswered: boolean;
    isHighlighted: boolean;
    likes: Record<
      string,
      {
        authorId: string;
      }
    >;
  }
>;

type ParamsType = {
  id: string
}

export default function Room () {
  const params = useParams<ParamsType>()
  const roomId = params.id

  const [question, setQuestion] = useState('')
  const [roomName, setRoomName] = useState('')
  const [questions, setQuestions] = useState<QuestionsType[]>([])
  const { user } = useAuth()

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
  }, [roomId]);

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
          <h1 className="title-01">Sala {roomName}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
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
        {JSON.stringify(questions)}
      </TheMainContent>
    </React.Fragment>
  )
}
