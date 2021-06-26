import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import PageAuth from '../components/PageAuth'
import TheAside from '../ui/TheAside'
import TheButton from '../ui/TheButton'

import { database } from '../services/firebase'

import logoImg from '../assets/images/logo.svg'
import goggleIconImg from '../assets/images/google-icon.svg'

export default function Home () {
  const history = useHistory()
  const [roomCode, setRoomCode] = useState('')
  const { user, signInWithGoogle } = useAuth()

  async function handleCreateRoom () {
    if (!user) {
      await signInWithGoogle()
    }

    history.push('/rooms/add')
  }

  async function handleJoinRoom (event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const ref = await database.ref(`rooms/${roomCode}`).get()

    if (!ref.exists()) {
      alert('Room does not exists')
      return
    }

    history.push(`/rooms/${roomCode}`)
  }

  return (
    <PageAuth>
      <TheAside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Ask me Bro" />
          <TheButton onClick={handleCreateRoom} className="btn-google create-room">
            <img src={goggleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </TheButton>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              value={roomCode}
              onChange={(event) => setRoomCode(event.target.value)}
            />
            <TheButton type="submit">Entrar na sala</TheButton>
          </form>
        </div>
      </main>
    </PageAuth>
  )
}
