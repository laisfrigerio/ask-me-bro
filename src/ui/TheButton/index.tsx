import React, { ButtonHTMLAttributes } from 'react'
import TheButtonWrapper from './styles'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string,
  isOutlined?: boolean,
}

export default function TheButton ({ className = '', isOutlined = false, ...props }: ButtonType) {
  return (
    <TheButtonWrapper
      className={`btn ${className} ${isOutlined ? 'outline' : ''}`}
      {...props}
    >
      {props.children}
    </TheButtonWrapper>
  )
}
