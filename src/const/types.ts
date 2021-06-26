import { ReactNode } from 'react'

export type AuthContextProviderType = {
	children: ReactNode
}

export type AuthContextType = {
	user: UserType | undefined,
  signInWithGoogle: () => Promise<void>
}

export type FirebaseQuestionType = Record<
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

export type QuestionType = {
	id?: string,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isHighlighted?: boolean,
  isAnswered?: boolean,
}

export type UserGoogleType = {
	uid: string,
  displayName: string,
  photoURL: string
}

export type UserType = {
  id?: string,
  name: string,
  avatar: string
}
