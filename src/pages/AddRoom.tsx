import React from 'react'
import { Link } from 'react-router-dom'

import PageAuth from '../components/PageAuth'
import TheAside from '../ui/TheAside'
import TheButton from '../ui/TheButton'

import logoImg from '../assets/images/logo.svg'

export default function AddRoom () {

  return (
    <PageAuth>
      <TheAside />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Ask me Bro" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
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
