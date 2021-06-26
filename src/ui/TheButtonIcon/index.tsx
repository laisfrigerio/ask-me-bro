import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import TheButtonIconWrapper from './styles'


type ParamsType = ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string,
	children: ReactNode
}

export default function TheButtonIcon ({ children, className = '', ...props }: ParamsType) {
	return (
		<TheButtonIconWrapper
			className={`btn-icon ${className}`}
			type="button"
			{...props}>
				{children}
		</TheButtonIconWrapper>
	)
}
