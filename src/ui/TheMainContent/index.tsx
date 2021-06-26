import React from 'react'
import TheMainContentWrapper from './styles'

export default function TheMainContent (props: { children: React.ReactNode }) {
	return (
		<TheMainContentWrapper>
			{props.children}
		</TheMainContentWrapper>
	)
}
