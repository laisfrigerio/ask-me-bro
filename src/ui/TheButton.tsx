import React from 'react'
import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Wrapper = styled.button`
  align-items: center;
  background: #835afd;
  border: 0;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 50px;
  justify-content: center;
  padding: 0 32px;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &.btn-google {
    background: #ea4335;
  }

  &.outline {
    background: #fff;
    border: 1px solid #835afd;
    color: #835afd;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`

type ButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean,
}

export default function TheButton ({ isOutlined = false, ...props }: ButtonType) {
  return (
    <Wrapper
      className={`btn ${isOutlined ? 'outline' : ''}`}
      {...props}
    >
      {props.children}
    </Wrapper>
  )
}
