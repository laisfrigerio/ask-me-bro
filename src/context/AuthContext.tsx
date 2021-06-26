import React, { createContext, useState, useEffect } from 'react'
import { AuthContextProviderType, AuthContextType, UserGoogleType, UserType } from '../const/types'
import { firebase, auth } from '../services/firebase'

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider (props: AuthContextProviderType) {
  const [user, setUser] = useState<UserType>()
  
  function getUserData (data: UserGoogleType) {
    if (data) {
      const { displayName, photoURL, uid } = data
  
      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }
  
      return {
        id: uid,
        name: displayName,
        avatar: photoURL
      }
    }
  }

  async function signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    const response: any = await auth.signInWithPopup(provider)
    setUser(getUserData(response.user))
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      setUser(getUserData(user))
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {props.children}
    </AuthContext.Provider>
  )
}
