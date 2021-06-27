import styled from 'styled-components'

const SpinnerWrapper = styled.div`
	animation: spin 2s linear infinite;
	border: 16px solid ${({ theme }) => theme.spinnerBackground};
  border-top: 16px solid ${({ theme }) => theme.buttonDefaultColor};
  border-radius: 50%;
  height: 120px;
	width: 120px;

	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
`

export default SpinnerWrapper
