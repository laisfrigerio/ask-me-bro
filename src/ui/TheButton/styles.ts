import styled from 'styled-components'

const TheButtonWrapper = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.secondaryColor};
  border: 0;
  border-radius: 8px;
  color: ${({ theme }) => theme.whiteColor};
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
    background: ${({ theme }) => theme.buttonGoogleColor};
    margin-top: 20px;
  }

  &.outline {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.secondaryColor};
    color: ${({ theme }) => theme.secondaryColor};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`

export default TheButtonWrapper
