import React, { FormEvent, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import PageAuth from '../components/PageAuth'
import TheAside from '../ui/TheAside'
import TheButton from '../ui/TheButton'

import { database } from '../services/firebase'
import { useAuth } from '../hooks/useAuth'

import logoImg from '../assets/images/logo-ask-me-bro.svg'

export default function AddRoom () {
  const { user } = useAuth()
  const history = useHistory()
  const [roomName, setRoomName] = useState('')

  async function handleAddRoom (event: FormEvent) {
    event.preventDefault()

    if (roomName.trim() === '') {
      return
    }

    const ref = database.ref('rooms')
    const firebase = await ref.push({ name: roomName, authorId: user?.id })

    history.push(`/rooms/${firebase.key}`)
  }

  return (
    <PageAuth>
      <TheAside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Ask me Bro" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleAddRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              value={roomName}
              onChange={(event) => setRoomName(event.target.value)}
            />
            <TheButton type="submit">Criar sala</TheButton>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui!</Link>
          </p>
        </div>
      </main>
    </PageAuth>
  )
}
