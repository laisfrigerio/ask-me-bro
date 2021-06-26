import React, { ButtonHTMLAttributes } from 'react'
import TheButtonWrapper from './styles'

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean,
}

export default function TheButton ({ isOutlined = false, ...props }: ButtonType) {
  return (
    <TheButtonWrapper
      className={`btn ${isOutlined ? 'outline' : ''}`}
      {...props}
    >
      {props.children}
    </TheButtonWrapper>
  )
}
