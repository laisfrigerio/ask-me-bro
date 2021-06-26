import React from 'react'
import TheMainContentWrapper from './styles'

export default function TheMainContent (props: { children: React.ReactNode, className?: string }) {
	return (
		<TheMainContentWrapper className={props.className ?? ''}>
			{props.children}
		</TheMainContentWrapper>
	)
}
