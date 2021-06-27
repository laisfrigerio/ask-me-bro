import React, { ButtonHTMLAttributes } from 'react'
import TheButtonFloatingWrapper from './styles'

export default function TheButtonFloating ({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
	return (
		<TheButtonFloatingWrapper className={`btn-floating ${className}`} {...props}>
			{props.children}
		</TheButtonFloatingWrapper>
	)
}
