import React from "react"
import { useParams } from "react-router-dom"
import TheHeader from '../ui/TheHeader'
import TheMainContent from '../ui/TheMainContent'
import ListQuestion from '../components/ListQuestion'
import RoomTitle from '../components/RoomTitle'
import { useRoom } from "../hooks/useRoom"

type ParamsType = {
  id: string
}

export default function AdminRoom () {
  const params = useParams<ParamsType>()
  const roomId = params.id
  const { questions, roomName } = useRoom(roomId)

  return (
    <React.Fragment>
      <TheHeader />
      <TheMainContent>
        <RoomTitle
          questions={questions}
          roomName={roomName}
        />
        <ListQuestion questions={questions} />
      </TheMainContent>
    </React.Fragment>
  )
}
